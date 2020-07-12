import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Column } from '../column';
import { Portfolio } from '../../portfolio/new-portfolio/portfolio';
import { Balance } from '../../models/balance';
import { ProfitLoss } from '../../models/profitLoss';

import { PortfolioService } from '../../portfolio/new-portfolio/portfolio.service';
import { ColumnService } from '../column.service';

import * as moment from 'moment/moment';

@Component({
  selector: 'app-new-column',
  templateUrl: './new-column.component.html',
  styleUrls: ['./new-column.component.css']
})
export class NewColumnComponent implements OnInit {

  portfolios: Portfolio[];
  selectedPortfolio = {'id':'-1', 'name': 'Select Portfolio', 'columns': []};
  numberOfColumns = 10;

  profitLoss = new ProfitLoss(0, 0);
  balance = new Balance(25000, 25000, 0, 0, 100000000, this.profitLoss);
  column = new Column(null, 'TradeX', '123', [], [], true, this.balance);

  constructor(private portfolioService: PortfolioService, private router: Router, private columnService: ColumnService) { }

  ngOnInit() {
    console.log(this.column);
    this.portfolioService.getPortfolios().subscribe(portfolios => {
      console.log(portfolios);
      this.portfolios = portfolios;
    });
  }

  updateColumnDetails(portfolio) {
    this.selectedPortfolio = portfolio;
    this.column.name = portfolio.name;
    this.column.portfolioId = portfolio.id;
    this.column.balance.initialBalance = portfolio.balance.currentBalance / this.numberOfColumns;
    this.column.balance.target = portfolio.balance.target / this.numberOfColumns;
  }

  onSubmit() {
    console.log(this.column);
    let columns = [];
    for(let i=1; i <= this.numberOfColumns; i++) {
      columns.push(new Column(null, this.column.name + '-' + i, this.column.portfolioId, [], [], true, this.column.balance));
    }
    let portfolio = this.selectedPortfolio;
    this.columnService.addColumns(columns).subscribe(cols => {
      cols.forEach(function(col) {
        portfolio.columns.push(col.id);
      });
      console.log(portfolio);
      this.portfolioService.updatePortfolio(portfolio).subscribe(p => {
        this.router.navigate(['/columns']);
      });
    });
  }

}

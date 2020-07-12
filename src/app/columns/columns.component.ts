import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { Column } from './column';
import { Portfolio } from '../portfolio/new-portfolio/portfolio';

import { PortfolioService } from '../portfolio/new-portfolio/portfolio.service';
import { ColumnService } from './column.service';

import * as _ from "lodash";

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.css']
})
export class ColumnsComponent implements OnInit {

  portfolios: Portfolio[];
  isLoaded = false;

  constructor(private portfolioService: PortfolioService, private router: Router, private columnService: ColumnService) { }

  ngOnInit() {
    this.portfolioService.getPortfolios().subscribe(portfolios => {
      this.portfolios = portfolios;
      this.columnService.getColumns().subscribe(columns => {
        let cols = _.groupBy(columns, 'portfolioId');
        this.updatePortfoliosWithColumns(cols);
      });
    });
  }

  updatePortfoliosWithColumns(cols) {
    this.portfolios.forEach(function(portfolio) {
      portfolio.columns = cols[portfolio.id];
    });
    this.isLoaded = true;
    console.log(this.portfolios);
  }
}

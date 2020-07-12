import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Column } from '../../columns/column';
import { Portfolio } from '../../portfolio/new-portfolio/portfolio';

import { ProfitLoss } from '../../models/profitLoss';

import { TransactionTime } from '../transactionTime';
import { Stock } from '../stock';
import { Observations } from '../observations';
import { NiftyPrices } from '../niftyPrices';

import { Trade } from '../trade';

import { PortfolioService } from '../../portfolio/new-portfolio/portfolio.service';
import { ColumnService } from '../../columns/column.service';

import { TradeService } from '../trade.service';

import * as moment from 'moment/moment';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.css']
})
export class NewTradeComponent implements OnInit {

  portfolios: Portfolio[];
  columns: Column[];
  selectedPortfolio = {'id':'-1', 'name': 'Select Portfolio'};
  selectedColumn = {'id':'-1', 'name': 'Select Column', 'stockIds': []};

  profitLoss = new ProfitLoss(0, 0);
  transactionTime = new TransactionTime(moment().format('YYYY-MM-DD'), '', '2017-2018', 4, 0);
  stock = new Stock('NSE', 'EQ', 'KiteX', 302, 0, 300, 100, 0, this.profitLoss);
  observations = new Observations('Dip buy at 38.2 retracement', 'Sell at high');
  niftyPrices = new NiftyPrices(10400, 0);
  trade = new Trade(null, 'CNC', 'DipBuy', 'Long', '123', '123-1', this.transactionTime, this.stock, this.observations, this.niftyPrices);

  orderTypes = ['CNC', 'MIS'];
  tradeTypes = ['BreakOut', 'DipBuy', 'Pattern', 'Top Sell'];
  positions = ['Long', 'Short'];
  financialYears = ['2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022'];
  quarters = [1, 2, 3, 4];
  exchanges = ['NSE', 'BSE'];

  constructor(private tradeService: TradeService, private portfolioService: PortfolioService, private router: Router, private columnService: ColumnService) { }

  ngOnInit() {
    this.portfolioService.getPortfolios().subscribe(portfolios => {
      this.portfolios = portfolios;
    });
  }

  updateColumnDetails(portfolio) {
    this.selectedPortfolio = portfolio;
    this.trade.portfolioId = portfolio.id;
    this.columnService.getColumnsByPortfolioId(portfolio.id).subscribe(cols => {
      this.columns = cols;
    });
  }

  updateSelectedColumnDetails(column) {
    this.selectedColumn = column;
    this.trade.columnId = column.id;
  }

  onSubmit() {
    console.log(this.trade);
    this.tradeService.addTrade(this.trade).subscribe(trade => {
      this.selectedColumn.stockIds.push(trade.id);
      this.columnService.addColumn(this.selectedColumn).subscribe(p => {
        this.router.navigate(['/trade']);
      });
    });
  }

}

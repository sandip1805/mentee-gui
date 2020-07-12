import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Portfolio } from './portfolio';
import { Balance } from '../../models/balance';
import { ProfitLoss } from '../../models/profitLoss';

import { PortfolioService } from './portfolio.service';

import * as moment from 'moment/moment';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})
export class NewPortfolioComponent implements OnInit {

  profitLoss = new ProfitLoss(0, 0);
  balance = new Balance(250000, 250000, 0, 0, 100000000, this.profitLoss);
  portfolio = new Portfolio(null, 'TradeX', 'Gain 10% in every trade', moment().format('YYYY-MM-DD'), moment().add(5, 'y').format('YYYY-MM-DD'),"Zerodha", [], this.balance);

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit() {
    console.log(this.portfolio);
  }

  onSubmit() {
    console.log(this.portfolio);
    this.portfolio.balance.currentBalance = this.portfolio.balance.initialBalance;
    this.portfolioService.addPortfolio(this.portfolio).subscribe(pf => {
      console.log(pf);
      this.router.navigate(['/portfolio']);
    });
  }

  go() {
    this.router.navigate(['/portfolio']);
  }
}

import { Component, OnInit } from '@angular/core';

import { PortfolioService } from './new-portfolio/portfolio.service';

import { Portfolio } from './new-portfolio/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {
    this.portfolioService.getPortfolios().subscribe(portfolios => {
      console.log(portfolios);
      this.portfolios = portfolios;
    });
  }

}

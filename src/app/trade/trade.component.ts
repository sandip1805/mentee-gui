import { Component, OnInit } from '@angular/core';

import { Trade } from './trade';

import { TradeService } from './trade.service';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  trades: Trade[];

  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.tradeService.getTrades().subscribe(trades => {
      this.trades = trades;
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewPortfolioComponent } from './portfolio/new-portfolio/new-portfolio.component';

import { PortfolioService } from './portfolio/new-portfolio/portfolio.service';
import { ColumnService } from './columns/column.service';
import { TradeService } from './trade/trade.service';

import { ColumnsComponent } from './columns/columns.component';
import { NewColumnComponent } from './columns/new-column/new-column.component';
import { TradeComponent } from './trade/trade.component';
import { NewTradeComponent } from './trade/new-trade/new-trade.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'portfolio', children: [
    { path: '', component: PortfolioComponent },
    { path: 'new-portfolio', component: NewPortfolioComponent },
  ]},
  { path: 'columns', children: [
    { path: '', component: ColumnsComponent },
    { path: 'new-column', component: NewColumnComponent },
  ]},
  { path: 'trade', children: [
    { path: '', component: TradeComponent },
    { path: 'new-trade', component: NewTradeComponent },
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PortfolioComponent,
    NewPortfolioComponent,
    ColumnsComponent,
    NewColumnComponent,
    TradeComponent,
    NewTradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PortfolioService, ColumnService, TradeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

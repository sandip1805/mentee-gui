import { TransactionTime } from './transactionTime';
import { Stock } from './stock';
import { Observations } from './observations';
import { NiftyPrices } from './niftyPrices';

export class Trade {
  constructor(
    public id: string,
    public orderType: string,
    public tradeType: string,
    public position: string,
    public portfolioId: string,
    public columnId: string,
    public transactionTime: TransactionTime,
    public stock: Stock,
    public observations: Observations,
    public niftyPrices: NiftyPrices
  ) {  }
}



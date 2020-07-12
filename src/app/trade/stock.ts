import { ProfitLoss } from '../models/profitLoss';

export class Stock {
  constructor(
    public exchange: string,
    public instrumentType: string,
    public name: string,
    public buyPrice: number,
    public sellPrice: number,
    public stopLoss: number,
    public quantity: number,
    public extraCharges: number,
    public profitLoss: ProfitLoss
  ) {  }
}

import { ProfitLoss } from './profitLoss';
export class Balance {
  constructor(
    public initialBalance: number,
    public currentBalance: number,
    public utilizedBalance: number,
    public unUtilizedBalance: number,
    public target: number,
    public profitLoss: ProfitLoss
  ) {  }
}

import { Balance } from '../models/balance';

export class Column {
  constructor(
    public id: string,
    public name: string,
    public portfolioId: string,
    public externalFundIds: string[],
    public stockIds: string[],
    public available: boolean,
    public balance: Balance,
  ) {  }
}



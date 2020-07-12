import { Balance } from '../../models/balance';

export class Portfolio {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public startDate: string,
    public endDate: string,
    public broker: string,
    public columns: string[],
    public balance: Balance,
  ) {  }
}



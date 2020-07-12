export class TransactionTime {
  constructor(
    public startDate: string,
    public endDate: string,
    public financialYear: string,
    public quarter: number,
    public holdingPeriod: number
  ) {  }
}

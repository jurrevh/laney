export default class Lane {
  private numbers: LaneNumber[];

  public constructor() {

  }

  public addNumber(number: LaneNumber): void {
    this.numbers.push(number);
  }

  public getTotal(): number {
    return 10;
  }

  public isBusted(): boolean {
    return true;
  }
}

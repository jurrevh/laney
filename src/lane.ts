import LaneNumber from "./laneNumber.js";

export default class Lane {
  private numbers: LaneNumber[];

  public constructor() {
    this.numbers = [];
  }

  /**
   * adds number
   */
  public addNumber(number: LaneNumber): void {
    this.numbers.push(number);
  }

  public getTotal(): number {
    let total: number = 0;
    for (let i: number = 0; i < this.numbers.length; i++) {
      total += this.numbers[i].getValue();
    }

    return total;
  }

  /**
   * Checks whether the lane's total exceeds 70.
    * @returns True if the lane's total exceeds 70; otherwise, false.
   */
  public isBusted(): boolean {
    const total: number = this.getTotal();
    if (total > 70) {
      return true;
    }
    return false;
  }
}

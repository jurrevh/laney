export default class LaneNumber {
  private value: number;

  private secret: boolean;

  public constructor() {
    this.value = 0; // hardcoded
    this.secret = false; // hardcoded
  }

  public getValue(): number {
    return this.value;
  }

  /**
   * returns whether isSecret is true or false
    * @returns whether this lane number is secret
   */
  public isSecret(): boolean {
    return this.secret;
  }
}

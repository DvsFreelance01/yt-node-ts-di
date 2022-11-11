import { injectable } from "tsyringe";

@injectable()
export class Fruits {
  private list: string[];
  constructor() {
    this.list = ["apple", "banana"];
  }

  public getList(): string[] {
    return this.list;
  }
}

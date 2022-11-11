import { injectable } from "tsyringe";

@injectable()
export class Animals {
  private list: string[];
  constructor() {
    this.list = ["lion", "dog"];
  }

  public getList(): string[] {
    return this.list;
  }
}

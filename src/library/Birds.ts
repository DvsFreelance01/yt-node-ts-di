import { injectable } from "tsyringe";

@injectable()
export class Birds {
  private list: string[];
  constructor() {
    this.list = ["ostrich", "duck"];
  }

  public getList(): string[] {
    return this.list;
  }
}

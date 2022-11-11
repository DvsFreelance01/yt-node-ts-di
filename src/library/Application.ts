import { injectable } from "tsyringe";
import { ListManager } from "./ListManager";

@injectable()
export class Application {
  constructor(private listManager: ListManager) {}

  public printAnimals() {
    console.log(this.listManager.getAnimals());
  }

  public printBirds() {
    console.log(this.listManager.getBirds());
  }

  public printFruits() {
    console.log(this.listManager.getFruits());
  }
}

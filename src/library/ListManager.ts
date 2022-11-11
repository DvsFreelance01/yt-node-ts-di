import { Fruits } from "./Fruits";
import { injectable } from "tsyringe";
import { Birds } from "./Birds";
import { Animals } from "./Animals";

@injectable()
export class ListManager {
  constructor(private animal: Animals, private bird: Birds, private fruits: Fruits) {}

  public getAnimals() {
    return this.animal.getList();
  }

  public getBirds() {
    return this.bird.getList();
  }

  public getFruits() {
    return this.fruits.getList();
  }
}

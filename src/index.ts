// most importtant if you want to use dependency injection
import "reflect-metadata";
import { container } from "tsyringe";
import { Application } from "./library/Application";

// no need to "new Application()" anymore
const app = container.resolve(Application);

app.printAnimals();
app.printBirds();
app.printFruits();

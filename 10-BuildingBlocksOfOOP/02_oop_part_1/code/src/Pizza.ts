import { Consumable } from "./Consumable";

export abstract class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number;

  constructor(slicesEaten: number, numberOfSlices: number) {
    super("pizza", 0, 0, false);
    this.slicesEaten = slicesEaten;
    this.numberOfSlices = numberOfSlices;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true); //All gone!
      }
      return "You eat a slice of the pizza.";
    } else {
      // There is no description returned if the Pizza is consumed since...
      // we are only interacting with class instances through the API defined by Item, which does not expose eat ().
      // Consumable's implementation of use() will display an appropriate message if the player tries to "use" a consumed Consumable.
      return "";
    }
  }
}

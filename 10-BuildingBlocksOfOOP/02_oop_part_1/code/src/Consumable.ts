import { Item } from "./Item";

export abstract class Consumable extends Item {
  spoiled: boolean;
  consumed: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.spoiled = spoiled;
    this.setConsumed(false);
  }
  abstract eat(): string;

  use(): string {
    if (!this.isSpoiled() && !this.isConsumed()) {
      return this.eat();
    } else if (this.isConsumed()) {
      return `There is nothing left of ${this.name} to consume.`;
    } else if (this.isSpoiled) {
      return `You eat the ${this.name}.\n You feel sick.`;
    } else return `You eat the ${this.name}.`;
  }
  isConsumed(): boolean {
    return this.consumed;
  }
  setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }
  isSpoiled(): boolean {
    return this.spoiled;
  }
  toString(): string {
    return ``;
  }
}

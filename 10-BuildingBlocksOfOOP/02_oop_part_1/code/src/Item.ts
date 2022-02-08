import { Comparable } from "./Comparable";

let counter: number = 0;

export abstract class Item implements Comparable<Item> {
  id: number;
  name: string;
  value: number;
  weight: number;

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.id = counter;
    counter++;
  }
  abstract use(): void;

  public compareTo(other: Item): number {
    if (this.value > other.value) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else if (this.value == other.value) {
      return this.name.localeCompare(other.name);
    }
    return 0;
  }
  static get numberOfItems(): number {
    return counter;
  }
  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }
  getId(): number {
    return this.id;
  }
  getValue(): number {
    return this.value;
  }
  getName(): string {
    return this.name;
  }
  getWeight(): number {
    return this.weight;
  }
  setValue(price: number): void {
    this.value = price;
  }
  setName(name: string): void {
    this.name = name;
  }
  setWeight(weight: number): void {
    this.weight = weight;
  }
  reset(): void {
    counter = 0;
  }
}

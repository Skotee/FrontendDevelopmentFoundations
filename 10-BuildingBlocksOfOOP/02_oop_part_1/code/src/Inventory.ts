import { Comparable } from "./Comparable";
import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory implements Comparable<Item> {
  items: Item[] = [];

  constructor() {}

  compareTo(other: Item): number {
    return 0;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(): void;
  sort(comparator?: ItemComparator): void {
    if (comparator != undefined) {
      this.items.sort(((a, b) => (a.weight - b.weight)));
    }
    this.items.sort(((a, b) => (a.value - b.value)));
  }

  toString(): string {
    return this.items.join(',');
  }
}

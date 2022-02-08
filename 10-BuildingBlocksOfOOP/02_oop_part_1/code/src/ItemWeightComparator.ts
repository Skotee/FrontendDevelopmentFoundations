import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  first: Item;
  second: Item;

  constructor(first: Item, second: Item) {
    this.first = first;
    this.second = second;
  }
  public compare(first: Item, second: Item): number {
    if (first.weight > second.weight) {
      return 1;
    } else if (first.weight < second.weight) {
      return -1;
    } else if (first.weight == second.weight) {
      return first.compareTo(second);
    }
  }
}

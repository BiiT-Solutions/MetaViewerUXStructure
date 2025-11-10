import {Item} from "./item";

export class Items {

  imageBase: string;
  items: Item[];

  public static clone(from: Items): Items {
    const to: Items = new Items();
    Items.copy(from, to);
    return to;
  }
  public static copy(from: Items, to: Items): void {
    to.imageBase = from.imageBase;
    to.items = from.items.map(item => Item.clone(item)) || from.items;
  }
}

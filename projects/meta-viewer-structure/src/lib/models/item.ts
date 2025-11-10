import {FacetObject} from "./facet-object";

export class Item {
  facets: FacetObject[];
  href: string;
  id: string;
  img: string;
  name: string;

  public static clone(from: Item): Item {
    const to: Item = new Item();
    Item.copy(from, to);
    return to;
  }
  public static copy(from: Item, to: Item): void {
    to.facets = from.facets.map(facet => FacetObject.clone(facet)) || from.facets;
    to.href = from.href;
    to.id = from.id;
    to.img = from.img;
    to.name = from.name;
  }
}

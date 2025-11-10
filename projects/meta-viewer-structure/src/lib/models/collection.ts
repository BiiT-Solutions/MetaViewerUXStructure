import {FacetCategory} from "./facet-category";
import {Items} from "./items";

export class Collection {

  facetCategories: FacetCategory[];
  items: Items;
  name: string;
  schemaVersion: string;
  xmlns: string;

  public static clone(from: Collection): Collection {
    const to: Collection = new Collection();
    Collection.copy(from, to);
    return to;
  }

  public static copy(from: Collection, to: Collection): void {
    to.facetCategories = from.facetCategories.map(facetCategory => FacetCategory.clone(facetCategory)) || from.facetCategories;
    to.items = Items.clone(from.items) || from.items;
    to.name = from.name;
    to.schemaVersion = from.schemaVersion;
    to.xmlns = from.xmlns;
  }
}

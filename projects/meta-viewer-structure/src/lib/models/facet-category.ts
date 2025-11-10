export class FacetCategory {

  name: string;
  type: string;

  public static clone(from: FacetCategory): FacetCategory {
    const to: FacetCategory = new FacetCategory();
    FacetCategory.copy(from, to);
    return to;
  }
  public static copy(from: FacetCategory, to: FacetCategory): void {
    to.name = from.name;
    to.type = from.type;
  }
}

export class FacetObject {

  name: string;
  type: object;

  public static clone(from: FacetObject): FacetObject {
    const to: FacetObject = new FacetObject();
    FacetObject.copy(from, to);
    return to;
  }

  public static copy(from: FacetObject, to: FacetObject): void {
    to.name = from.name;
    to.type = from.type;
  }
}

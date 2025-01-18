import {Value} from "./value";

export class FacetObject {

  Name: string;
  Type: Value;

  public static clone(from: FacetObject): FacetObject {
    const to: FacetObject = new FacetObject();
    FacetObject.copy(from, to);
    return to;
  }

  public static copy(from: FacetObject, to: FacetObject): void {
    to.Name = from.Name;
    to.Type = from.Type;
  }
}

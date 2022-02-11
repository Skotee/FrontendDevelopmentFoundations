//A Package is anything up to and including 160 ounces

import { Shipment } from "./Shipment";
import { ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Package extends Shipment {
  constructor(state: State, strategy: ShipperStrategy, imp: ShipperImplementor) {
    super(state, strategy, imp);
  }

  public callIt(s: String): void {
    console.log("This is Package");
    this.implementor.callee(s);
  }
}

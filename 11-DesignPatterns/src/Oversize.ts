//An Oversized package is anything heavier than 160 ounces

import { Shipment } from "./Shipment";
import { ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Oversize extends Shipment {
  constructor(state: State, strategy: ShipperStrategy, imp: ShipperImplementor) {
    super(state, strategy, imp);
  }

  public callIt(s: String): void {
    console.log("This is Oversize");
    this.implementor.callee(s);
  }
}

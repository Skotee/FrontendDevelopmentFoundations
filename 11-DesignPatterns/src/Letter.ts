// Letter is anything up to and including 15 ounces (less than a pound)

import { Shipment } from "./Shipment";
import { ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Letter extends Shipment {
  constructor(state: State, strategy: ShipperStrategy, imp: ShipperImplementor) {
    super(state, strategy, imp);
  }

  public callIt(s: String): void {
    console.log("This is Letter");
    this.implementor.callee(s);
  }
} 

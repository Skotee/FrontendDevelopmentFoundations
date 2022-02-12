// Letter is anything up to and including 15 ounces (less than a pound)

import { Shipment } from "./Shipment";
import { enumShippers, ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Letter extends Shipment {
  constructor(
    state: State,
    strategy: ShipperStrategy,
    implementor: ShipperImplementor
  ) {
    super(state, strategy, implementor);
  }
  //bridge pattern
  //abstraction

  public getBridgeCost(type: string) {
    if (type === enumShippers.AirEast) {
      console.log(0.39 * this.state.weight);
      return 0.39 * this.state.weight;
    }
    if (type === enumShippers.ChicagoSprint) {
      console.log(0.42 * this.state.weight);
      return 0.42 * this.state.weight;
    }
    if (type === enumShippers.PacificParcel) {
      console.log(0.51 * this.state.weight);
      return 0.51 * this.state.weight;
    }
    console.log("This is Letter");
    this.implementor.callee();
    return 0;
  }
}

//An Oversized package is anything heavier than 160 ounces

import { Shipment } from "./Shipment";
import { enumShippers, ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Oversize extends Shipment {
  constructor(
    state: State,
    strategy: ShipperStrategy,
    imp: ShipperImplementor
  ) {
    super(state, strategy, imp);
  }
  //bridge pattern
  //abstraction
  public getBridgeCost(type: string) {
    console.log("This is Oversize");
    this.implementor.callee();
    if (type === enumShippers.AirEast) {
      console.log(10 + 0.25 * this.state.weight);
      return 10 + 0.25 * this.state.weight;
    }
    if (type === enumShippers.ChicagoSprint) {
      console.log(0);
      return 0;
    }
    if (type === enumShippers.PacificParcel) {
      console.log((0.02 + 0.19) * this.state.weight);
      return (0.02 + 0.19) * this.state.weight;
    }
    return 0;
  }
}

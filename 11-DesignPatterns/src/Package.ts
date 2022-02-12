//A Package is anything up to and including 160 ounces

import { Shipment } from "./Shipment";
import { enumShippers, ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

export class Package extends Shipment {
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
    console.log('\nCost based on task with Bridge Pattern:');
    
    if (type === enumShippers.AirEast) {
      console.log(0.25 * this.state.weight);
      return 0.25 * this.state.weight;
    }
    if (type === enumShippers.ChicagoSprint) {
      console.log(0.2 * this.state.weight);
      return 0.2 * this.state.weight;
    }
    if (type === enumShippers.PacificParcel) {
      console.log(0.19 * this.state.weight);
      return 0.19 * this.state.weight;
    }
    this.implementor.callee();
    return 0;
  }
}

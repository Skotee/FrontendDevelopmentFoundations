import {
  chooseShipper,
  enumCost,
  enumShippers,
  ShipperImplementor,
  ShipperStrategy,
} from "./Shipper";
import { state } from "./State";

export class ChicagoSprintShipper
  implements ShipperStrategy, ShipperImplementor
{
  //strategy pattern
  public getCost(): number {
    console.log("`getCost` method of ChicagoSprintShipper is being called");
    if (chooseShipper() == enumShippers.ChicagoSprint) {
      console.log(
        "Cost based on Strategy Pattern:\n",
        state.weight * enumCost["chicagoSprint"]
      );
      return state.weight * enumCost["chicagoSprint"];
    }
    return 0;
  }

  //bridge pattern
  public callee(): void {
    console.log("`callee` of ChicagoSprintShipper is being called.");
  }
}

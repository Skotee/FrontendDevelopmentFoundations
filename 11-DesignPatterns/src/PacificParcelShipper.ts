import {
  chooseShipper,
  enumCost,
  enumShippers,
  ShipperImplementor,
  ShipperStrategy,
} from "./Shipper";
import { state } from "./State";

export class PacificParcelShipper
  implements ShipperStrategy, ShipperImplementor
{
  //strategy pattern
  public getCost(): number {
    console.log("`getCost` method of PacificParcelShipper is being called");
    if (chooseShipper() == enumShippers.PacificParcel) {
      console.log(
        "Cost based on Strategy Pattern:\n",
        state.weight * enumCost["pacificParcel"]
      );
      return state.weight * enumCost["pacificParcel"];
    }
    return 0;
  }
  //bridge pattern
  //implementor
  public callee(): void {
    console.log("`callee` of PacificParcelShipper is being called.");
  }
}

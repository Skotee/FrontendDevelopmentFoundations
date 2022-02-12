import {
  chooseShipper,
  enumCost,
  enumShippers,
  ShipperImplementor,
  ShipperStrategy,
} from "./Shipper";
import { state } from "./State";

export class AirEastShipper implements ShipperStrategy, ShipperImplementor {
  //strategy pattern
  public getCost(): number {
    console.log("`getCost` method of AirEastShipper is being called");
    if (
      chooseShipper() == enumShippers.AirEast ||
      state.fromZipCode === undefined || //If the zip code is unknown Air East will be the default, or if it has first char = 1 or 2 or 3, Air East also will be chosen
      state.fromZipCode === ""
    ) {
      console.log(
        "Cost based on Strategy Pattern:\n",
        state.weight * enumCost["airEast"]
      );
      return state.weight * enumCost["airEast"];
    } else return 0;
  }
  //bridge pattern
  public callee(): void {
    console.log("`callee` of AirEastShipper is being called.");
  }
}

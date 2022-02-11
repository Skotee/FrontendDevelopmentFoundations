import { ShipperImplementor, ShipperStrategy } from "./Shipper";

export class AirEastShipper implements ShipperStrategy, ShipperImplementor {
  public getCost(): number {
    console.log("`execute` method of AirEastShipper is being called");
    return 7;
  }

  public callee(s: any): void {
    console.log("`callee` of AirEastShipper is being called.");
    console.log(s);
  }
}

import { ShipperImplementor, ShipperStrategy } from "./Shipper";

export class ChicagoSprintShipper
  implements ShipperStrategy, ShipperImplementor
{
  public getCost(): number {
    console.log("`execute` method of ChicagoSprintShipper is being called");
    return 5;
  }

  public callee(s: any): void {
    console.log("`callee` of ChicagoSprintShipper is being called.");
    console.log(s);
  }
}

import { ShipperImplementor, ShipperStrategy } from "./Shipper";

export class PacificParcelShipper
  implements ShipperStrategy, ShipperImplementor
{
  public getCost(): number {
    console.log("`execute` method of PacificParcelShipper is being called");
    return 3;
  }

  public callee(s: any): void {
    console.log("`callee` of PacificParcelShipper is being called.");
    console.log(s);
  }
}

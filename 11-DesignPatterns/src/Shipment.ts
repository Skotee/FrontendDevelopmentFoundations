//  will represent the object being shipped.
import { log } from "./decorators";
import { ShipperImplementor, ShipperStrategy } from "./Shipper";
import { state, State } from "./State";

export enum ShipmentType {
  Letter = "letter",
  Package = "package",
  Oversized = "oversized",
}

export enum ShipmentTypeMaxWeight {
  Letter = 15,
  Package = 160,
}

export function chooseShipmentType(): ShipmentType {
  if (state.weight < ShipmentTypeMaxWeight.Letter) return ShipmentType.Letter;
  if (state.weight <= ShipmentTypeMaxWeight.Package)
    return ShipmentType.Package;
  return ShipmentType.Oversized;
}

export class Shipment {
  state: State;
  implementor: ShipperImplementor;
  private strategy: ShipperStrategy;
  idCounter: number = 0;
  constructor(
    state: State,
    strategy: ShipperStrategy,
    imp: ShipperImplementor
  ) {
    this.state = state;
    this.strategy = strategy;
    this.implementor = imp;
  }

  public executeStrategy(): void {
    this.strategy.getCost();
  }

  public getBridgeCost(type: string): number {
    console.log("Error");
    throw new Error("This method is abstract!");
  }

  getShiphmentId(): number {
    //for now (Step 1), just increases a static int by one and returns it but in the future will get the real shipment ID.
    return ++this.idCounter;
  }

  @log
  ship(): string {
    let cost = this.state.weight * 0.39;
    return `Shipment Id ${this.state.shipmentId}, from ${this.state.fromAddress} to ${this.state.toAddress} with cost: ${cost}$.`;
  }

  toString(): string {
    return `Shipment with the ID ${this.state.shipmentId} will be picked up from ${this.state.fromAddress} ${this.state.fromZipCode} and shipped to ${this.state.toAddress} ${this.state.toZipCode}`;
  }
}

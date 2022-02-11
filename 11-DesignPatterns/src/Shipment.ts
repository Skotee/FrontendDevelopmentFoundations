//  will represent the object being shipped.
import { log } from "./decorators";
import { ShipperImplementor, ShipperStrategy } from "./Shipper";
import { State } from "./State";

enum enumWeight {
  airEast = 15,
  chicagoSprint = 160,
  pacificParcel = 160,
}

type WarningsType = {
  fragile: string;
  doNotLeave: string;
  returnReceiptRequested: string;
};

// export const Warnings = {
//   fragile: "**MARK FRAGILE**",
//   doNotLeave: "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**",
//   returnReceiptRequested: "**MARK RETURN RECEIPT REQUESTED**	",
// };

export enum Warnings {
  fragile = "**MARK FRAGILE**",
  doNotLeave = "**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**",
  returnReceiptRequested = "**MARK RETURN RECEIPT REQUESTED**	",
}

//typeof operator gives you the type of an object. //when we don't know the type of an object or we just have a value and not a type of that value like the following? - This is where we use keyof typeof together.
// second explanatation:
// keyof typeof will infer the type of a javascript object and return a type that is the union of its keys. Because it can infer the exact value of the keys it can return a union of their literal types instead of just returning "string".

export function chooseWarningsLabels(options: string[]) {
  options.forEach((element: string) => {
    // console.log(`${Warnings[element as keyof typeof Warnings]}`); //this one works
    return `\n ${Warnings[element as keyof typeof Warnings]}`; //don't know why it doesn't work //TODO later
  });
}

export class Shipment {
  state: State;
  implementor: ShipperImplementor;
  private strategy: ShipperStrategy;
  static idCounter: number = 0;
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

  public callIt(s: String): void {
    throw new Error("This method is abstract!");
  }

  getShiphmentId(): number {
    //for now (Step 1), just increases a static int by one and returns it but in the future will get the real shipment ID.
    return ++Shipment.idCounter;
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

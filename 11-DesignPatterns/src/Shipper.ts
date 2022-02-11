import { state } from "./State";

export interface ShipperStrategy {
  getCost(): number;
}

export interface ShipperImplementor {
  callee(s: any): void;
}

enum enumZip {
  airEast = "123",
  chicagoSprint = "456",
  pacificParcel = "789",
}

enum enumCost {
  airEast = 0.39,
  chicagoSprint = 0.42,
  pacificParcel = 0.51,
}

 export abstract class Shipper {
  cost: number = 0;
  constructor() {}

  getCost(): number { 
    if (enumZip["chicagoSprint"].includes(state.fromZipCode[0])) {
      return state.weight * enumCost["chicagoSprint"];
    } else if (enumZip["pacificParcel"].includes(state.fromZipCode[0])) {
      return state.weight * enumCost["pacificParcel"];
    } else return state.weight * enumCost["airEast"]; //If the zip code is unknown Air East will be the default, or if it has first char = 1 or 2 or 3, air east also will be chosen
  }
}

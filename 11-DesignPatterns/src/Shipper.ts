import { state } from "./State";

export interface ShipperStrategy {
  getCost(): number;
}

export interface ShipperImplementor {
  callee(): void;
}

export enum enumZip {
  airEast = "123",
  chicagoSprint = "456",
  pacificParcel = "789",
}

export enum enumCost {
  airEast = 0.39,
  chicagoSprint = 0.42,
  pacificParcel = 0.51,
}

export enum enumShippers {
  AirEast = "airEast",
  ChicagoSprint = "chicagoSprint",
  PacificParcel = "pacificParcel"
}

export function chooseShipper() {
  if (enumZip["pacificParcel"].includes(state.fromZipCode[0])) {
    return enumShippers.PacificParcel
  }  else if (enumZip["chicagoSprint"].includes(state.fromZipCode[0])) {
    return enumShippers.ChicagoSprint
  }  else if (enumZip["airEast"].includes(state.fromZipCode[0])) {
    return enumShippers.AirEast
  }
}
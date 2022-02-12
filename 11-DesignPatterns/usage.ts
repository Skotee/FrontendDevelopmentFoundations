import { AirEastShipper } from "./src/AirEastShipper";
import { ChicagoSprintShipper } from "./src/ChicagoSprintShipper";
import { Letter } from "./src/Letter";
import { Client } from "./src/Client";
import { Oversize } from "./src/Oversize";
import { PacificParcelShipper } from "./src/PacificParcelShipper";
import { Package } from "./src/Package";
import { chooseShipmentType, Shipment } from "./src/Shipment";
import { chooseShipper, enumShippers, ShipperStrategy } from "./src/Shipper";
import { state } from "./src/State";

let strategy: ShipperStrategy;
let client = new Client();
let shipment = new Shipment(
  state,
  new ChicagoSprintShipper(),
  new ChicagoSprintShipper()
);
let chicagoSprintShipper = new ChicagoSprintShipper();

client.onShip(shipment);
console.log("shipID", shipment.getShiphmentId());

// console.log(client.onShip(shipment));
console.log(chicagoSprintShipper.getCost());

export function show(): void {
  //strategy
  var context: Shipment = new Shipment(
    state,
    new ChicagoSprintShipper(),
    new ChicagoSprintShipper()
  );

  context.executeStrategy();

  context = new Shipment(
    state,
    new PacificParcelShipper(),
    new PacificParcelShipper()
  );
  context.executeStrategy();

  context = new Shipment(state, new AirEastShipper(), new AirEastShipper());
  context.executeStrategy();

  context.ship();
  console.log(context.ship());

  //bridge pattern
  let shipperType = chooseShipper();
  let typeOfShipment = chooseShipmentType();
  console.log("shipper type:", shipperType);
  console.log("type of shipment:", typeOfShipment);

  switch (shipperType) {
    case enumShippers.PacificParcel:
      switch (typeOfShipment) {
        case "letter":
          var letterAbstractionPacific: Shipment = new Letter(
            state,
            strategy,
            new PacificParcelShipper()
          );
          console.log("It is a letter abstraction for pacific parcel.");
          letterAbstractionPacific.getBridgeCost(enumShippers.PacificParcel);
          break;
        case "package":
          var packageAbstractionPacific: Shipment = new Package(
            state,
            strategy,
            new PacificParcelShipper()
          );
          console.log("It is a package abstraction for pacific parcel.");
          packageAbstractionPacific.getBridgeCost(enumShippers.PacificParcel);
          break;
        case "oversized":
          var oversizeAbstractionPacific: Shipment = new Oversize(
            state,
            strategy,
            new PacificParcelShipper()
          );
          console.log("It is a oversize abstraction for pacific parcel.");
          oversizeAbstractionPacific.getBridgeCost(enumShippers.PacificParcel);
          break;
      }
      break;
    case enumShippers.AirEast:
      switch (typeOfShipment) {
        case "letter":
          var letterAbstractionAirEast: Shipment = new Letter(
            state,
            strategy,
            new AirEastShipper()
          );
          console.log("It is a letter abstraction for AirEast.");
          letterAbstractionAirEast.getBridgeCost(enumShippers.AirEast);
          break;
        case "package":
          var packageAbstractionAirEast: Shipment = new Package(
            state,
            strategy,
            new AirEastShipper()
          );
          console.log("It is a package abstraction for AirEast.");
          packageAbstractionAirEast.getBridgeCost(enumShippers.AirEast);
          break;
        case "oversized":
          var oversizeAbstractionAirEast: Shipment = new Oversize(
            state,
            strategy,
            new AirEastShipper()
          );
          console.log("It is a oversize abstraction for AirEast.");
          oversizeAbstractionAirEast.getBridgeCost(enumShippers.AirEast);
          break;
      }
      break;
    case enumShippers.ChicagoSprint:
      switch (typeOfShipment) {
        case "letter":
          var letterAbstractionChicagoSprint: Shipment = new Letter(
            state,
            strategy,
            new ChicagoSprintShipper()
          );
          console.log("It is a letter abstraction for chicagoSprint.");
          letterAbstractionChicagoSprint.getBridgeCost(
            enumShippers.ChicagoSprint
          );
          break;
        case "package":
          var packageAbstractionChicagoSprint: Shipment = new Package(
            state,
            strategy,
            new PacificParcelShipper()
          );
          console.log("It is a package abstraction for chicagoSprint.");
          packageAbstractionChicagoSprint.getBridgeCost(
            enumShippers.ChicagoSprint
          );
          break;
        case "oversized":
          var oversizeAbstractionChicagoSprint: Shipment = new Oversize(
            state,
            strategy,
            new PacificParcelShipper()
          );
          console.log("It is a oversize abstraction for chicagoSprint.");
          oversizeAbstractionChicagoSprint.getBridgeCost(
            enumShippers.ChicagoSprint
          );
          break;
      }
    default:
      console.log("No such type of shipment exists!");
      break;
  }
}

show();

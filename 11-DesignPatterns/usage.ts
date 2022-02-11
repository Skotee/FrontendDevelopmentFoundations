import { AirEastShipper } from "./src/AirEastShipper";
import { ChicagoSprintShipper } from "./src/ChicagoSprintShipper";
import { Gui } from "./src/Gui";
import { Letter } from "./src/Letter";
import { Oversize } from "./src/Oversize";
import { PacificParcelShipper } from "./src/PacificParcelShipper";
import { Package } from "./src/Package";
import { chooseWarningsLabels, Shipment } from "./src/Shipment";
import { ShipperStrategy } from "./src/Shipper";
import { state } from "./src/State";

let strategy: ShipperStrategy;
let gui = new Gui(23, 'guitoAdress', 'fromAddress', '12345', '54321', 21)
// let client = new Client(strategy);
// let shipment = new Shipment(state, strategy);
let chicagoSprintShipper =  new ChicagoSprintShipper();
// client.onShip()

// let ship = shipment.ship();

// console.log('ship', ship);
// console.log('shipID', shipment.getShiphmezntId());

// console.log(client.onShip(shipment));
// console.log(chicagoSprintShipper.getCost());

export function show() : void {
  var context: Shipment = new Shipment(state, new ChicagoSprintShipper(), new ChicagoSprintShipper());
 
  context.executeStrategy();
 
  context = new Shipment(state, new PacificParcelShipper(), new PacificParcelShipper());
  context.executeStrategy();
 
  context = new Shipment(state, new AirEastShipper(), new AirEastShipper());
  context.executeStrategy();

  // context.ship();
  console.log(  context.ship());
  
  var letterAbstraction: Shipment = new Letter(state, strategy, new PacificParcelShipper());
  var packageAbstraction: Shipment = new Package(state, strategy,new PacificParcelShipper());
  var oversizeAbstraction: Shipment = new Oversize(state, strategy, new PacificParcelShipper());
  letterAbstraction.callIt('letterAbstraction')
  packageAbstraction.callIt('packageAbstraction')
  oversizeAbstraction.callIt('oversizeAbstraction')

 }
 show();

//  chooseWarningsLabels(['fragile', 'doNotLeave'])

//  console.log( chooseWarningsLabels(['fragile', 'doNotLeave']));
 
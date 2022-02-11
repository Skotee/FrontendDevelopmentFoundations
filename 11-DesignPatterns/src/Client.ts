// represent the controlling object that will interact with the GUI when it is available. 

// The client object will obtain a single instance of the object which represents the item being shipped, and then ask it to "ship itself". 
// The return from this request will be a single string indicating the shipment ID, where the item was sent from, where it is going, and how much the cost was.

import { Gui } from "./Gui";
import { Shipment } from "./Shipment";

export class Client {
  gui: Gui;
  constructor(gui: Gui) {
    this.gui = gui;
  }

  onShip(shipment: Shipment){
    console.log('shipment', shipment);
    return shipment;
  }
}

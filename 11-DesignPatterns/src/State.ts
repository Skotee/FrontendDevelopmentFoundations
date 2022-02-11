export interface State {
  shipmentId : number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];
}

export const state : State = {
  shipmentId: 2,
  toAddress: 'toAdress',
  fromAddress: 'fromAdress',
  toZipCode: '54321',
  fromZipCode: '12345',
  weight: 21
}

// State object that will come from the end user via the GUI will have following interface:


// ●	shipmentId (a number that represents an existing ID, or 0, which means you must generate a new, unique ID at construction time)
// ●	toAddress (a string containing street, city, and state) – should be changeable
// ●	fromAddress (a string containing street, city, and state) – should be changeable
// ●	toZipCode (a string containing exactly 5 characters) – should be changeable
// ●	fromZipCode (a string containing exactly 5 characters) – should be changeable
// ●	weight (a number, storing the weight of the item in ounces)
// ●	marks (an optional string array – will represent additional characteristic of shipment) – should be changeable

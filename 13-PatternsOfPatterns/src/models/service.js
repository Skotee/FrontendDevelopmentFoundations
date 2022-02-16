
 const getCurrencies = fetch("../../src/models/rates2.json")
  .then((response) => response.json())
  .then(adresses => adresses[0].currencies)


console.log(getCurrencies); //getting here Promise




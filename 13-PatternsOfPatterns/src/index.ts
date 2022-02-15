import Handlebars from "handlebars";

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));

class Helper {
  public component(): HTMLDivElement {
    const element = document.createElement("div");
    element.innerHTML = "Hello, how are you? I am written in typescript.";
    return element;
  }
}

// document.body.appendChild(new Helper().component());

// https://manage.exchangeratesapi.io/quickstart

//api: 3d8f15d93976d3d2341b43ca7e135f08

// http://api.exchangeratesapi.io/v1/latest?access_key=3d8f15d93976d3d2341b43ca7e135f08

// function currencyConverter(
//   baseCurrency,
//   baseNumber,
//   targetCurrency,
//   targetNumber
// ) {
//   // api url

//   url =
//     "https://api.exchangeratesapi.io/latest?symbols=" +
//     targetCurrency +
//     "&base=" +
//     baseCurrency;

//   // make a get request to api

//   $.get(url, function (data) {
//     console.log(data.rates);

//     for (let [key, value] of Object.entries(data.rates)) {
//       var result = value * baseNumber;

//       $("#targetNumber").val(result);
//     }
//     console.log(`data.rates.${targetCurrency}`);
//   });
// }

// $(document).ready(function () {
//   // some variables

//   var baseCurrency = "USD";

//   var baseNumber = 1;

//   var targetCurrency = "INR";

//   var targetNumber;

//   var url;

//   currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);

//   // get base currency value

//   $("#base").change(function () {
//     // base currency

//     baseCurrency = $(this).children("option:selected").val();

//     // call currencyConverter function

//     currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
//   });

//   // get base currency number

//   $("#baseNumber").change(function () {
//     // base number

//     baseNumber = $(this).val();

//     // call currencyConverter function

//     currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
//   });

//   // get target currency value

//   $("#target").change(function () {
//     // target currency

//     targetCurrency = $(this).children("option:selected").val();

//     // call currencyConverter function

//     currencyConverter(baseCurrency, baseNumber, targetCurrency, targetNumber);
//   });

//   // get target currency number

//   $("#targetNumber").change(function () {
//     // target number

//     targetNumber = $(this).val();

//     // call currencyConverter function

//     currencyConverter2(baseCurrency, baseNumber, targetCurrency, targetNumber);
//   });

//   // function to convert BaseCurrency to TargetCurrency

//   function currencyConverter(
//     baseCurrency,
//     baseNumber,
//     targetCurrency,
//     targetNumber
//   ) {
//     // api url

//     url =
//       "https://api.exchangeratesapi.io/latest?symbols=" +
//       targetCurrency +
//       "&base=" +
//       baseCurrency;

//     // make a get request to api

//     $.get(url, function (data) {
//       console.log(data.rates);

//       for (let [key, value] of Object.entries(data.rates)) {
//         var result = value * baseNumber;

//         $("#targetNumber").val(result);
//       }
//       console.log(`data.rates.${targetCurrency}`);
//     });
//   }

//   function currencyConverter2(
//     baseCurrency,
//     baseNumber,
//     targetCurrency,
//     targetNumber
//   ) {
//     // api url

//     url =
//       "https://api.exchangeratesapi.io/latest?symbols=" +
//       baseCurrency +
//       "&base=" +
//       targetCurrency;

//     // make a get request to api

//     $.get(url, function (data) {
//       console.log(data.rates);

//       for (let [key, value] of Object.entries(data.rates)) {
//         console.log(value);

//         var result = value * targetNumber;

//         $("#baseNumber").val(result);
//       }
//       console.log(`data.rates.${targetCurrency}`);
//     });
//   }
// });

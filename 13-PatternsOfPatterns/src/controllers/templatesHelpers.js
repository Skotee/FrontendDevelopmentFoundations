var templateInfo = document.getElementById("inputs-template").innerHTML;
var template = Handlebars.compile(templateInfo);
var templateSlidersInfo = document.getElementById("sliders-template").innerHTML;
var templateSliders = Handlebars.compile(templateSlidersInfo);

var context = {
  currencies: [
    {
      name: "USD",
      rate: 1.25,
    },
    {
      name: "PLN",
      rate: 2,
    },
    {
      name: "CHF",
      rate: 3,
    },
  ],
};
var templateData = template(context);
var templateSlidersData = templateSliders(context);
document.getElementById("contentDiv").innerHTML += templateData;
document.getElementById("contentSlidersDiv").innerHTML += templateSlidersData;

var inputsFieldsets = document.querySelectorAll(".inputsFieldsets");
var slidersFieldsets = document.querySelectorAll(".slidersFieldsets");

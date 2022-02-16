var euroRate = document.querySelectorAll('.euroRate');

var elmsEuroUniversal = document.querySelectorAll(".euroUniversal");
var elmsEuroUniversalSliders = document.querySelectorAll(".euroUniversalSliders");

var elmsCurrencyUniversal = document.querySelectorAll(".currencyUniversal");
var elmsCurrencyUniversalSliders = document.querySelectorAll(".currencyUniversalSliders");

var elmsEuroRangeOutput = document.querySelectorAll('output[name="euroRangeOutput"]');
var elmsCurrencyRangeOutput = document.querySelectorAll('output[name="currencyRangeOutput"]');

for (let i = 0; i < elmsCurrencyUniversal.length; i++) {
  elmsCurrencyUniversal[i].value = elmsEuroUniversal[i].value * context.currencies[i].rate;
}

var flagAll = 'similar';

function handleChangeMode(myRadio) {
  flagAll = myRadio.value;
}

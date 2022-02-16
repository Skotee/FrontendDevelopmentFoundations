function changeCurrencySliders(val) {
  if (flagAll === 'similar') {
    for (let i = 0; i < elmsCurrencyUniversalSliders.length; i++) {
      elmsCurrencyUniversalSliders[i].value = val;
      elmsCurrencyRangeOutput[i].innerHTML = elmsCurrencyUniversalSliders[i].value;
      elmsEuroRangeOutput[i].innerHTML = elmsEuroUniversalSliders[i].value;
    }
    for (var i = 0; i < elmsEuroUniversalSliders.length; i++) {
      elmsEuroUniversalSliders[i].value = elmsCurrencyUniversalSliders[i].value / context.currencies[i].rate;
    }
  } else { //(flagAll === 'uniqueRadio')
    individualChangeForSliders();
  }
}

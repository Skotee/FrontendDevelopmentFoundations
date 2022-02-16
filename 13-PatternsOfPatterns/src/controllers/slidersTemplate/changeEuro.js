function changeEuroSliders(val) {
  if (flagAll === 'similar') {
    for (let i = 0; i < elmsEuroUniversalSliders.length; i++) {
      elmsEuroUniversalSliders[i].value = val;
      elmsEuroRangeOutput[i].innerHTML = elmsEuroUniversalSliders[i].value;
      elmsCurrencyRangeOutput[i].innerHTML = elmsCurrencyUniversalSliders[i].value;
    }
    for (let i = 0; i < elmsCurrencyUniversalSliders.length; i++) {
      elmsCurrencyUniversalSliders[i].value = elmsEuroUniversalSliders[i].value * context.currencies[i].rate;
    }
  } else {  //(flagAll === 'uniqueRadio')
    individualChangeForSliders();
  }
}

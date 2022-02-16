function changeCurrency(val) {
  if (flagAll === 'similar') {
    for (let i = 0; i < elmsCurrencyUniversal.length; i++) {
      elmsCurrencyUniversal[i].value = val;
    }
    for (var i = 0; i < elmsEuroUniversal.length; i++) {
      elmsEuroUniversal[i].innerHTML = elmsCurrencyUniversal[i].value / context.currencies[i].rate;
    }
  } else { //(flagAll === 'uniqueRadio')
    individualChange();
  }
}
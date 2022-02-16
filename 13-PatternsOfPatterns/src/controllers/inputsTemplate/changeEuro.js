function changeEuro(val) {
  if (flagAll === 'similar') {
    for (let i = 0; i < elmsEuroUniversal.length; i++) {
      elmsEuroUniversal[i].value = val;
    }
    for (let i = 0; i < elmsCurrencyUniversal.length; i++) {
      elmsCurrencyUniversal[i].value = elmsEuroUniversal[i].value * context.currencies[i].rate;
    }
  } else {  //(flagAll === 'uniqueRadio')
    individualChange();
  }
}

function individualChangeForSliders() {
  slidersFieldsets.forEach(element => {
    const currency = element.querySelector('input[name="currencyUniversalSliders"]');
    const euro = element.querySelector('input[name="euroUniversalSliders"]');
    const euroRate = element.querySelector('input[name="euroRate"]').value;
    const outputEuro = element.querySelector('output[name="euroRangeOutput"]');
    const outputCurrency = element.querySelector('output[name="currencyRangeOutput"]');

    euro.addEventListener('input', () => {
      currency.value = euro.value * euroRate;
    })
    currency.addEventListener('input', () => {
      euro.value = currency.value / euroRate;
    })

    outputEuro.innerHTML = currency.value;
    outputCurrency.innerHTML = euro.value;
  });
}
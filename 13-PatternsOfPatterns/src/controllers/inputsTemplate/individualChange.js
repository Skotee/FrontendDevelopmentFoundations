function individualChange() {
  inputsFieldsets.forEach(element => {
    const currency = element.querySelector('input[name="currencyUniversal"]');
    const euro = element.querySelector('input[name="euroUniversal"]');
    const euroRate = element.querySelector('input[name="euroRate"]').value;

    euro.addEventListener('input', () => {
      currency.value = euro.value * euroRate;
    })
    currency.addEventListener('input', () => {
      euro.value = currency.value / euroRate;
    })
  });
}
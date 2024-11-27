const exchangeRates = {
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.009, INR: 1 },
    USD: { INR: 83.5, EUR: 0.92, GBP: 0.75, USD: 1 },
    EUR: { INR: 90.1, USD: 1.09, GBP: 0.82, EUR: 1 },
    GBP: { INR: 102.4, USD: 1.33, EUR: 1.22, GBP: 1 },
  };
  
  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("currencyFrom").value;
    const toCurrency = document.getElementById("currencyTo").value;
  
    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").innerText = "Please enter a valid amount!";
      return;
    }
  
    const rate = exchangeRates[fromCurrency][toCurrency];
    const result = (amount * rate).toFixed(2);
  
    document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
  }
  
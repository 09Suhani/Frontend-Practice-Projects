const amountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');
const converterBox = document.querySelector('.converter-box');

// Array to populate the selected tags with these countries
const countries = [
  {code: "USD", name: "United States Dollar"},
  {code: "INR", name: "Indian Rupees"},
  { code: "EUR", name: "Euro" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "GBP", name: "British Pound Sterling" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CHF", name: "Swiss Franc" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "SEK", name: "Swedish Krona" },
  { code: "NZD", name: "New Zealand Dollar" },
  { code: "KRW", name: "South Korean Won" },
  { code: "SGD", name: "Singapore Dollar" },
  { code: "NOK", name: "Norwegian Krone" },
  { code: "MXN", name: "Mexican Peso" },
  { code: "HKD", name: "Hong Kong Dollar" },
  { code: "TRY", name: "Turkish Lira" },
  { code: "RUB", name: "Russian Ruble" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "ZAR", name: "South African Rand" }
];

// Showing currencies from array to select tag 
countries.forEach(country => {
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');

  option1.value =  option2.value = country.code;
  option1.textContent =  option2.textContent = `${country.code} (${country.name})`;
  
  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);
});

// Select tags default value 
fromCurrencyElement.value = "USD";
toCurrencyElement.value = "INR";

//Function to get exchange rate using API
const getExchangeRate = async () => {
  const amount = parseFloat(amountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;
  resultElement.textContent = 'Fecthing Exchange rates....';

  try{
    /* Intentionally throwing an error for testing error handling
    if (true) {
      throw new Error('Simulated error');
    } */

  //Fetch data from API
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  const data = await response.json();

  const conversionRate = data.rates[toCurrency];
  const convertedAmount = (amount * conversionRate).toFixed(2);

  if(typeof conversionRate === 'undefined'){
    resultElement.textContent = 'Exchange rate data is not available for selected countries';
  }

  else{
    convertedAmountElement.value = convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    // Display conversion result for 3 seconds before clearing input fields
    setTimeout(() => {
      amountElement.value = '';
      convertedAmountElement.value = '';
    }, 3000);
  }
}
catch(error){
  converterBox.innerHTML = `<h2>Error while fetching the data!!!</h2>`;
}

/*catch(error) {
  // Display error message
  converterBox.innerHTML = `<h2>Error while fetching the data: ${error.message}</h2>`;
}*/

}

// Fetching exchange rate when users input the amount or change currency
amountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);

// window.addEventListener('load', getExchangeRate);
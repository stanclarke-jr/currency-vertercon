const baseEndpoint = 'https://api.ratesapi.io/api/latest';
const baseRates = {};

export async function fetchRates(base = 'CAD') {
  const response = await fetch(`${baseEndpoint}?base=${base}`);
  const rates = await response.json();
  return rates;
}

export async function currencyConverter(amount, from, to) {
  // 1. Check if conversion rate(s) exist for given currency
  if (!baseRates[from]) {
    const rates = await fetchRates(from);
    // 2. Store rate for next time
    baseRates[from] = rates;
  }
  if (!baseRates[to]) {
    const rates = await fetchRates(to);
    // 2. Store rate for next time
    baseRates[to] = rates;
  }
  // 3. Convert the amount passed in
  const rate = baseRates[from].rates[to];
  const convertedAmount = amount * rate;
  return convertedAmount;
}

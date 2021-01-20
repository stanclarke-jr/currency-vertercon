export function generateOptions(options) {
  return Object.entries(options)
    .map(([currencyCode, currencyName]) => `<option value="${currencyCode}">${currencyName} (${currencyCode})</option>`)
    .join('');
}

export function formatCurrency(amount, currency) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
  return Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
  }).format(amount);
}

import { currencyConverter } from './lib.js';
import { formatCurrency } from './utils.js';
import { fromInput, toAmountEl, fromSelect, toSelect } from './elements.js';

export async function handleInputs() {
  const rawAmount = await currencyConverter(fromInput.value, fromSelect.value, toSelect.value);
  toAmountEl.textContent = formatCurrency(rawAmount, toSelect.value);
}

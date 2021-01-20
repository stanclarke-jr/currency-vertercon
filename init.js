import currencies from './currencies.js';
import { generateOptions } from './utils.js';
import { handleInputs } from './handlers.js';
import { fromSelect, toSelect } from './elements.js';

function init() {
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // Populate <option> elements on page load
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInputs);
}

export default init;

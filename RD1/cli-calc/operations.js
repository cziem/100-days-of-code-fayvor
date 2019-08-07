const add = (x, y) => (+x) + (+y);
const substract = (x, y) => (+x) - (+y);
const multiply = (x, y) => (+x) * (+y);
const divide = (x, y) => (+x) / (+y);

const validateNumbers = (x, y) => {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  return true
}

module.exports = {
  add,
  substract,
  divide,
  multiply,
  validateNumbers
}

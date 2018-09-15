const assert = require('assert');
const { add, substract, divide, multiply, validateNumbers } = require('./operations')

it ('correctly calculates the sum of 1 and 3', () => {
  assert.equal(add(1, 3), 4);
})

it ('correctly calculates the difference of 33 and 3', () => {
  assert.equal(substract(33, 3), 30);
})

it ('correctly calculates the product of 12 and 12', () => {
  assert.equal(multiply(12, 12), 144);
})

it ('correctly calculates the quotient of 10 and 2', () => {
  assert.equal(divide(10, 2), 5);
})

// Validator function
it ('indicates failure when a string is used instead of a number', () => {
  assert.equal(validateNumbers('phavor', 5), false);
})

it ('indicates failure when two strings are used instead of numbers', () => {
  assert.equal(validateNumbers('phavor', 'Fayvor'), false);
})

it ('successfully runs when two numbers are used', () => {
  assert.equal(validateNumbers(5, 5), true);
})

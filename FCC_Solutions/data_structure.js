// use spread operator in fn
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6

// Reassignment
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

// Nested Destructring
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const { tomorrow : { max: maxOfTomorrow }  } = forecast; // change this line
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// Variable Swapping
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b] // I didnt need a const or let on the left side
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// Template literals formatting
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = 
  [ `<li class="text-warning">${arr[0]}</li>`,
    `<li class="text-warning">${arr[1]}</li>`,
    `<li class="text-warning">${arr[2]}</li>` ];
  // change code above this line

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);

// Output should look like this
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/


// Getters and Setters
/**
 * Getter functions are meant to simply return (get) the value of an object's private variable to the user without    the user directly accessing the private variable.

* Setter functions are meant to modify (set) the value of an object's private variable based on the value passed      into the setter function. This change could involve calculations, or even overwriting the previous value completely.
**/

function makeClass() {
"use strict";
/* Alter code below this line */
class Thermostat {
  constructor(temp) {
    this._temperature = temp;
  }

  // getter
  get temperature() {
    return this._temperature;
  }

  // setter
  set temperature(updatedTemp) {
    this._temperature = updatedTemp
  }
}
/* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
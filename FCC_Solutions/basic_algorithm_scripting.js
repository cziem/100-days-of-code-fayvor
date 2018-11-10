// Factorialize a number
function factorialize(num) {
  if (num === 0) { return 1; }
  return num * factorialize(num - 1);
}

factorialize(5);

// Find the longest word in a string
function findLongestWordLength(str) {
  let word = str.split(' ').sort((a, b) => {
    if (a.length > b.length) {
      return -1;
    } else if (a.length < b.length) {
      return 1;
    } else {
      return 0;
    }
  })[0]
  console.log(word)
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return largest numbers
function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

// method 2
function largestOfFour(arr) {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

// method 3
function largestOfFour(arr) {
  // You can do this!
  let largeArr = [];

  let arrLarge = arr.map(item => {
    return item.sort((a, b) => {
      if (a > b) {
        return -1;
      } else if (a < b) {
        return 1;
      } else {
        return 0;
      }
    })
  })

  arrLarge.forEach(bigNum => {
    return largeArr.push(bigNum[0])
  })

  return largeArr;
}

// Confirm ending
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let last = str.split('').length - 1;

  return str[last] === target ? true : false;
}

confirmEnding("Bastian", "n");

// method 2
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor

  return str.slice(str.length - target.length) === target;
}

confirmEnding("He has to give me a new name", "name");

// reeat str
function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

// method 2
function repeatStringNumTimes(str, num) {
  if (num < 0)
    return "";
  if (num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

// method 3
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);

// Truncate a String
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3) {
    return str.slice(0, (num - 3)) + '...';
  } else if (str.length > num && num <= 3) {
    return str.slice(0, num) + '...';
  } else {
    return str;
  }

}

// method 2
function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

// fineder keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Title capitalize
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");

// method 2
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

// Franken slice
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// falsey bouncer
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let falseyArr = arr.filter(falsey => {
    if (falsey) {
      return falsey;
    }
  });
  return falseyArr;
}

bouncer([7, "ate", "", false, 9]);

// method 2
function bouncer(arr) {
  return arr.filter(Boolean);
}

// where do i belong
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function (a, b) { return a - b });
  return arr.indexOf(num);
}

// method 2
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) { count++; }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);
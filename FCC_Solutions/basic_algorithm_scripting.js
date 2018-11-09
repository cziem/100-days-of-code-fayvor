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
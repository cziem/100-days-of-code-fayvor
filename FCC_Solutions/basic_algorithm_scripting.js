// Factorialize a number
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
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
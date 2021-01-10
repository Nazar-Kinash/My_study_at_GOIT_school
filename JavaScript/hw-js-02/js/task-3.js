const findLongestWord = function(string) {
  let array = string.split(' ');
  let longestWorb = '';
  for (const word of array) {
    longestWorb = word.length > longestWorb.length ? word : longestWorb;
  }
  return longestWorb;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

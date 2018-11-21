const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.notSameLength = function (word) {
  return word.length !== this.word.length;
};

AnagramFinder.prototype.isIdentical = function (word) {
  return word.toLowerCase() === this.word.toLowerCase();
};

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((word) => {
    // If lengths don't match or words identical: Return false
    if (this.notSameLength(word) || this.isIdentical(word)){
      return false;
    }
    // Array both words and sort them alphabetically
    const sortedWordArray = word.toLowerCase().split('').sort()
    const sortedThisWordArray = this.word.toLowerCase().split('').sort();

    // Check each letter matches individually. Return true only if they all match.
    return sortedWordArray.every((letter, index) => {
      return letter === sortedThisWordArray[index];
    })
  })
}




module.exports = AnagramFinder;

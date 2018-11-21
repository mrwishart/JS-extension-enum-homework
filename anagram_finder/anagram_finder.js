const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
  return otherWords.filter((word) => {
    // If lengths don't match: Return false (filter word)
    if (word.length !== this.word.length){
      return false;
    }
    // If words are already identical: Return false (filter word)
    if (this.word.toLowerCase() === word.toLowerCase()) {
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

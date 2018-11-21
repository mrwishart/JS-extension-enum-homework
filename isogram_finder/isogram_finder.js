const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {

  // Loop through every letter of the word
  return this.word.every((letter, index, word) => {
    // Check if current letter is contained in the remaining letters of the word
    return !word.slice(index+1).includes(letter);
  })

}

module.exports = IsogramFinder;

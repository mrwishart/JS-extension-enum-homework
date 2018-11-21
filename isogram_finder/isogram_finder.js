const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {

  // Loop through every letter of the word
  return this.word.every((letter, index, word) => {
    // Check if letter is contained in the rest of the word
    return !word.slice(index+1).includes(letter);
  })

}

module.exports = IsogramFinder;

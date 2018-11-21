const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  // Question: This kept throwing up an error when I tried to use this.phrase in the .includes below? Why do I need to assign a new variable for this to work?
  const phraseString = this.phrase;

  return this.alphabet.every(function (letter) {
    return phraseString.includes(letter);
  })
}

module.exports = PangramFinder;

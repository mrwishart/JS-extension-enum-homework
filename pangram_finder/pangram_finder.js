const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  // Question: I tried doing split in the initializer; kept throwing up an error when I tried to do the .includes below?
  const phraseArray = this.phrase.split('');

  return this.alphabet.every(function (letter) {
    return phraseArray.includes(letter);
  })
}

module.exports = PangramFinder;

const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {

  const word_array = this.phrase.split('');

  return this.alphabet.every(function (letter) {
    return word_array.includes(letter);
  })
}

module.exports = PangramFinder;

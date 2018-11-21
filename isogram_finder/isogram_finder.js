const IsogramFinder = function (word) {
  this.word = word.toLowerCase().split('');
}

IsogramFinder.prototype.isIsogram = function () {
  let temp_array = this.word.slice(1);

  const repeatedLetters = this.word.every((letter) => {
    if (temp_array.includes(letter)){
      return false;
    } else {
      temp_array.shift();
      return true;
    }
  });

  return repeatedLetters;
}

module.exports = IsogramFinder;

const AnagramFinder = function (word) {
  // this.word = word.toLowerCase().split('').sort();
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
    // Alphabetize both words
    sorted_word = word.toLowerCase().split('').sort().join('');
    sorted_main_word = this.word.toLowerCase().split('').sort().join('');

    // Check if they are the same.
    return sorted_word === sorted_main_word;

    // console.log(temp_word, temp_this_word);
    //
    // return temp_word.every((letter, index) => {
    //   return letter === temp_this_word[index];
    // })
  })
}



module.exports = AnagramFinder;

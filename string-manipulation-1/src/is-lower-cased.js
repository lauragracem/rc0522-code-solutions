/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    var lowerWord = word[i];
    if (lowerWord === lowerWord.toLowerCase()) {
      return true;
    } else if (lowerWord !== lowerWord.toLowerCase()) {
      return false;
    }
  }
}

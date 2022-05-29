/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 1; i < word.length; i++) {
    var upperWord = word[i];
    if (upperWord === upperWord.toUpperCase()) {
      return true;
    } else if (upperWord !== upperWord.toUpperCase()) {
      return false;
    }
  }
}

/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    result.push(newWord);
  }
  return result;
}

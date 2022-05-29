/* exported capitalize */
function capitalize(word) {
  for (var letters = 0; letters < word.length; letters++) {
    var result = word[letters];
    if (result === result.toLowerCase()) {
      return result.toUpperCase() + word.slice(1).toLowerCase();
    } else if (result === result.toUpperCase()) {
      return result[0].toUpperCase() + word.slice(1).toLowerCase();
    }
  }
}

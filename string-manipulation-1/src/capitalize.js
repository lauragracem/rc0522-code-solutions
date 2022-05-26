/* exported capitalize */
function capitalize(word) {
  for (var i = 0; i < word.length; i++) {
    var access = word[i];
    if (access !== access.toUpperCase) {
      return access.toUpperCase;
    }
  }
}

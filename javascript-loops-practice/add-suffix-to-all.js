/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var result = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    result.push(newWord);
  }
  return result;
}

/*
Define a function and name it addSuffixToAll that takes 2 parameters named words and suffix.
Assign an empty array to a new variable and name it result.
Write a for loop: set the intialization to 0, set the condition to i is less than the
 length of words, set the counter to increment.
Access the index of words and add it with suffix. Assign the result to a new variable and name it newWord.
Push newWord into result.
Return result.
*/

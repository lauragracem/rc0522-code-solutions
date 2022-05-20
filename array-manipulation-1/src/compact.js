/* exported compact */
/*
Define a function named compact that takes a parameter named array.
Assign an empty array to a new variable.
Write for loop.
Access array and assign it to a new variable.
Write a lot of 'if' statements.
Push the result of the variable into the initial variable.
Return initial variable declared.
*/

/*
Omits false
Omits null
Omits nan
Omits 0 & -0
Omits undefined
Omits empty strings
Maintains order of truthy elements
*/

function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    var arr1 = array[i];
    if (arr1 === false) {
      // do nothing
    } else if (arr1 === null) {
      // do nothing
    } else if (Number.isNaN(arr1)) {
      // do nothing
    } else if (arr1 === 0) {
      // do nothing
    } else if (arr1 === undefined) {
      // do nothing
    } else if (arr1 === '') {
      // do nothing
    } else {
      arr.push(arr1);
    }
  }
  return arr;
}

/*
Define a function named compact that takes a parameter named array. Completed
Assign an empty array to a new variable. Completed
Write for loop. Completed
Access array and assign it to a new variable. Completed
Write 'if' statement followed by else if block.
Push the result of the variable into the initial variable.
Return initial variable declared.
*/

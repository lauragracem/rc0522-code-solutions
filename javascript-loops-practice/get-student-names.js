/* exported getStudentNames */
function getStudentNames(students) {
  var property = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var name = student.name;
    property.push(name);
  }
  return property;
}

/*
Define a function and name it getStudentNames that takes one parameter named students.
Assign an empty array to a new variable named property.
Write a for loop--set the initialization to 0, set the condition to i is less than
 the length of students, set the counter to increment.
Access the index of students and assign it to a variable namved student.
Access the name property of student and assign it to a variable named name.
Push name into property.
Return property.
*/

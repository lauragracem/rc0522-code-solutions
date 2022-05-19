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

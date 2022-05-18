/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var job = person.occupation;
  var birthPlace = person.birthPlace;
  var description = name + ' is a ' + job + ' from ' + birthPlace + '.';
  return description;
}

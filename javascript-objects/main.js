var student = {
  firstName: 'Laura Grace',
  lastName: 'Manimtim',
  age: 33
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Speech Assistant';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Acure',
  model: 'CL',
  year: 2001
};

vehicle['color'] = 'Silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Spasky',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet: ', pet);

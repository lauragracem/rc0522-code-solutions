function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name + '!';
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

var seconds = convertMinutesToSeconds(1);
console.log('Seconds: ', seconds);

var greeting = greet('Axl');
console.log('Greet: ', greeting);

var area = getArea(10, 10);
console.log('Find the Area: ', area);

var firstName = getFirstName({ firstName: 'Bea', lastName: 'Choi' });
console.log('First Name is: ', firstName);

var lastElement = getLastElement(['candy', 'bananas', 'milk']);
console.log('Array length is: ', lastElement);

var num1 = 5;
var num2 = 7;
var num3 = 25;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue: ', maximumValue);

var heroes = ['Wonder Woman', 'Starfire', 'Spider Man', 'Storm'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHere: ', randomHero);

var library = [
  {
    book:
    {
      title: 'Sense & Sensibility',
      author: 'Jane Austen'
    }
  },
  {
    book:
    {
      title: 'Atomic Habits',
      author: 'James Clear'
    }
  },
  {
    book:
    {
      title: 'The Knowledge of the Holy',
      author: 'A.W. Tozer'
    }
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('valueOfLibrary', library);

var fullName = 'LauraGrace Manimtim';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName.shift();
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);

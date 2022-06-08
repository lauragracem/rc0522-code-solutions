setTimeout(greeting, 2000);

var $h1 = document.querySelector('h1');

function greeting() {
  $h1.innerHTML = 'Hello There';
}

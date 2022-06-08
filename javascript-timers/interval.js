var timer = setInterval(countDown, 1000);

var $h1 = document.querySelector('h1');

function countDown() {
  if ($h1.textContent === '1') {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
    return;
  }
  $h1.textContent--;

}

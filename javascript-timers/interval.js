var timer = setInterval(countDown, 1000);

var $h1 = document.querySelector('h1');

function countDown() {
  if ($h1.innerHTML === '1') {
    $h1.innerHTML = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
    return;
  }
  $h1.innerHTML--;

}

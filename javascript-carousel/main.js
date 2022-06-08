var $first = document.querySelector('.first');
var $second = document.querySelector('.second');
var $third = document.querySelector('.third');
var $fourth = document.querySelector('.fourth');
var $fifth = document.querySelector('.fifth');
var $leftArrow = document.querySelector('.fa-solid.fa-angle-left');
var $rightArrow = document.querySelector('.fa-solid.fa-angle-right');

$leftArrow.addEventListener('click', goBack);
function goBack() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $fifth.className = 'fifth';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $fourth.className = 'fourth';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $third.className = 'third';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $second.className = 'second';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $first.className = 'first';
  }
}

$rightArrow.addEventListener('click', goForward);
function goForward() {
  if ($first.className === 'first') {
    $first.className = 'first hidden';
    $second.className = 'second';
    return;
  }
  if ($second.className === 'second') {
    $second.className = 'second hidden';
    $third.className = 'third';
    return;
  }
  if ($third.className === 'third') {
    $third.className = 'third hidden';
    $fourth.className = 'fourth';
    return;
  }
  if ($fourth.className === 'fourth') {
    $fourth.className = 'fourth hidden';
    $fifth.className = 'fifth';
    return;
  }
  if ($fifth.className === 'fifth') {
    $fifth.className = 'fifth hidden';
    $first.className = 'first';
  }
}

// function spin() {
//   if ($first === '.first') {
//
//   }
//   if ($second === '.second.hidden') {
//
//   }
//   $images++;
//
//
// $third.className = 'third';
// $fourth.className = 'fourth';
// $fifth.className = 'fifth';

// var timer = setInterval(countDown, 1000);

// var $h1 = document.querySelector('h1');

// function countDown() {
//   if ($h1.textContent === '1') {
//     $h1.textContent = '~Earth Beeeelooowww Us~';
//     clearInterval(timer);
//     return;
//   }
//   $h1.textContent--;

// }

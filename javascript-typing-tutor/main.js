var $spik = document.querySelectorAll('span');

document.addEventListener('keydown', e => {
  if (e.key === phrase[phraseIndex]) {
    $spik[phraseIndex].className = 'correct';
    phraseIndex++;
  } else {
    $spik[phraseIndex].className = 'incorrect';
  }
});

var phrase = 'grumpy wizards make toxic brew';
var phraseIndex = 0;

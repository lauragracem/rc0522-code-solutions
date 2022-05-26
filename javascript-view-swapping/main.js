var $tabC = document.querySelector('.tab-container');
var $nodeTab = document.querySelectorAll('.tab');
var $nodeView = document.querySelectorAll('.view');

$tabC.addEventListener('click', switchLang);

function switchLang(event) {
  // console.log('target', event.target);
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $nodeTab.length; i++) {
      var look = $nodeTab[i];
      if (look === event.target) {
        look.className = 'tab active';
      } else {
        look.className = 'tab';
      }
    }
    var $dataViewAtt = event.target.getAttribute('data-view');
    for (var x = 0; x < $nodeView.length; x++) {
      var get = $nodeView[x];
      var att = get.getAttribute('data-view');
      if ($dataViewAtt !== att) {
        get.className = 'hidden';
      } else {
        get.className = 'view';
      }
    }

  }
}

// matches(selectorString)

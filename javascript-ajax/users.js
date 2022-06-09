var $userList = document.querySelector('#user-list');

function users() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.length; i++) {
      var access = xhr.response[i];
      var $li = document.createElement('li');
      $li.textContent = access.name;
      $userList.appendChild($li);
    }
  });
  xhr.send();
}
users();

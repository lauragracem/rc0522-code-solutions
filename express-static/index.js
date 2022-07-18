// const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const join = path.join('public', '__dirname');
console.log(join);

const staticReturn = app.use(express.static('public'));
console.log(staticReturn);

app.listen(3000, function (err) {
  if (err) console.log('Error in server setup');
  console.log('Server listening on Port', 3000);
});

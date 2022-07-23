const express = require('express');
const app = express();

// const nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  res.json({ grades });
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.sendStatus(201);
});

app.listen(3000, () => {
  // console.log('Listening on port 3000!');
});

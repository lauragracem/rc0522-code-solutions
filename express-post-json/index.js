const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const id in grades) {
    gradesArray.push(grades[id]);
  }
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  const grade = { id: nextId, name, course, score };
  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

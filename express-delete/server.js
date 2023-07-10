import express from 'express';

const port = 8080;
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const grade in grades) {
    gradeArray.push(grades[grade]);
  }
  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  if (grades[req.params.id]) {
    delete grades[req.params.id];
  } else {
    console.log(`ID of ${req.params.id} not found, please try again...`);
  }
  res.sendStatus(204); // I could probably send a different status for each, but I'm not sure what status I would send for failure...404?
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.use(express.json());

function getRandomResponse() {
  return {
    id: faker.datatype.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    date: faker.date.recent(),
    randomNumber: faker.datatype.number(),
  };
}

app.all('*', (req, res) => {
  const randomResponse = getRandomResponse();
  res.json(randomResponse);
});

app.listen(port, () => {
  console.log(`Flexible Fake API server is running at http://localhost:${port}`);
});

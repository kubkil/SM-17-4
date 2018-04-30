const express = require('express');
const app = express();

app.use(express.static('assets'));
app.get('/', (req, res) => {
  res.send('Hello world');
});

const server = app.listen(3000, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Przykładowa aplikacja nasłuchuje na http://${host}:${port}`);
});
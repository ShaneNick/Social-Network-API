const express = require ('express');

const routes = require('./routes');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  console.log(req.url);
  next();
});


app.get('/test', (req, res) => {
  res.send('Test route');
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

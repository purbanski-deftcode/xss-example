const express = require('express');
const template = require('./template.js');

const app = express();
const values = ['Some value' , 'Some another value'];

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.json());

/*
  This endpoint is protected against XSS attack because we are using here Pug template engine which is properly
  encoding every data that is passed to it
*/
app.get('/', function (req, res) {
  res.render('index', { values })
});

/*
  This endpoint is vulnerable to XSS attack because we are not sanitizing input provided by user
  and we are inserting it to HTML as it is
*/
app.get('/xss', (req, res) => {
  res.send(template.replace('%items%', values.map(val => `<li>${val}</li>`).join('')))
});

app.post('/add', (req, res) => {
  const { value } = req.body;

  values.push(value);

  res.send('OK');
});

app.listen(4000, () => {
  console.info('Server is listening on port 4000')
});

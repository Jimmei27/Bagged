const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const searchRouter = require('./routes/search');

const PORT = 3000;

app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/search', searchRouter)

app.get('/', (req, res) => {
   return res.sendFile(path.resolve(__dirname, './dist/index1.html'))
  });

app.use('/', express.static(path.resolve(__dirname, 'dist')));

app.get('/bagged', (req, res) => {
  return res.sendFile(path.resolve(__dirname, './dist/index.html'))
    });


app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;
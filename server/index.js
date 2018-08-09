const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3004);

app.get('/', function(req, res) {
  res.redirect('/rooms/1');
});

app.post('/api/rooms', (req, res) => {
    res.send('this is a post request');
  });

app.route('/api/rooms/:id')
  .get((req, res) => {
    res.send('this is a get request for item, ' + req.params.id);
  })
  .put((req, res) => {
    res.send('this is a put request');
  })
  .delete((req, res) => {
    res.send('this is a delete request');
  });

app.use(express.static('public'));
app.use(express.static('client/dist'));

app.listen(app.get('port'), () =>
  console.log(`listening on port ${app.get('port')}!`)
);

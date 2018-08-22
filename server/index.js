require('newrelic');
const express = require('express');
const cors = require('cors');
const cluster = require('cluster');
const path = require('path');
const numCPUs = require('os').cpus().length;
const dbRouter = require('./dbRouter.js');
// Removed Body-Parser

const app = express();

app.use(cors());

app.set('port', process.env.PORT || 3004);

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.get('/', (req, res) => {
    res.redirect('/rooms/1');
  });

  app.post('/api/rooms', (req, res) => {
    res.send('this is a post request');
  });

  app.route('/api/rooms/:id/*')
    .get(dbRouter.get)
    .put(dbRouter.put)
    .delete(dbRouter.delete);

  app.get('*/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
  });
  app.use('/*', express.static('public'));

  app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`);
  });
}

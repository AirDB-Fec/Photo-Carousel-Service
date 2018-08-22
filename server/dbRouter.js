const pgDb = require('./pgDb.js');
const redisDb = require('./redisDb.js');

const dbRouter = {
  get: (req, res) => {
    redisDb.get(req.params.id, (err, result) => {
      if (result) {
        res.send(result);
      } else {
        pgDb.selectById(req.params.id, (rows) => {
          res.send(rows);
          redisDb.set(req.params.id, JSON.stringify(rows), (err, reply) => {});
        });
      }
    });
  },
  put: (req, res) => {
    res.send('this is a put request');
  },
  delete: (req, res) => {
    res.send('this is a delete request');
  },
};

module.exports = dbRouter;

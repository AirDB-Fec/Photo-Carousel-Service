const redis = require('redis');

const client = redis.createClient({ socket_keepalive: true });

client.on('error', (err) => {
  console.error(err);
});

const redisDb = {
  set: (key, val, cb) => {
    client.set(key, val, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        cb(null, reply);
      }
    });
  },
  get: (key, cb) => {
    client.get(key, (err, reply) => {
      if (err) {
        console.error(err);
      } else {
        cb(null, reply);
      }
    });
  },
};

module.exports = redisDb;

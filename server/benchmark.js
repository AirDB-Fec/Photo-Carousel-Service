const siege = require('siege');

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const benchmark = siege().on(3004);

(() => {
  for (let i = 0; i < 10000; i += 1) {
    benchmark.for(1).times.get(`/api/rooms/${random(9000000, 10000000)}`);
  }
  benchmark.attack();
})();

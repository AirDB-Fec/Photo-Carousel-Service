const words = require('an-array-of-english-words');
const faker = require('faker');

/*
10,000,027 records

Postgres primary records - roomNames:
Schema: {
  id int primary key,
  name text,
}
*/

const roomNamesCSV = function postgresPrimaryRecordsCsvGenerator() {
  let num = 1;

  for (let j = 0; j < words.length; j += 1) {
    for (let i = 93781; i < 93818; i += 1) {
      process.stdout.write(`${num},${words[j]}_${words[i]}\n`);
      num += 1;
    }
    if (num > 10000000) return;
  }
};

/*
50M+ records

Postgres secondary records - photos:
Schema: {
  url text,
  description text,
  room_id int foreign key,
}
*/

const photosCSV = function postgresRelationalRecordsCsvGenerator() {
  const randomNumber = max => Math.floor(Math.random() * max);
  let photoNum = 0;
  let photos;

  for (let i = 7000001; i <= 10000027; i += 1) {
    photos = randomNumber(10) + 1;
    for (let j = 1; j <= photos; j += 1) {
      process.stdout.write(`${photoNum + j}.jpg,${faker.lorem.sentence()},${i}\n`);
    }
    photoNum = (photos + photoNum) % 991;
  }
};

/*
10,000,027 records

Cassandra primary records:
Schema: {
  url text,
  description text,
  related map<text,text>,
}
*/

const tsv = function cassandraPrimaryRecordsTsvGenerator() {
  let id = 1;
  let photoId = 0;
  let photosPerRoom;

  const randomNumber = max => Math.floor(Math.random() * max);

  const photoObject = (length) => {
    const obj = {};
    for (let k = 1; k <= length; k += 1) {
      obj[`${photoId + k}.jpg`] = faker.lorem.sentence();
    }
    return obj;
  };

  for (let j = 0; j < words.length; j += 1) {
    for (let i = 93781; i < 93818; i += 1) {
      photosPerRoom = randomNumber(10) + 1;
      process.stdout.write(`${id}\t${words[j]}_${words[i]}\t${JSON.stringify(photoObject(photosPerRoom))}\n`);
      id += 1;
      photoId = (photosPerRoom + photoId) % 991;
    }
    if (id > 10000000) return;
  }
};

/*
Invoke functions on command line:
node generateData.js <function name> > fileName.csv;
*/

(() => {
  const methods = { roomNamesCSV, photosCSV, tsv };
  methods[process.argv[2]]();
})();

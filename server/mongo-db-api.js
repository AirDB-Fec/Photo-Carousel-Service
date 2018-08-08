const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;

// initial checks
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connection Successful');
});

const schema = new mongoose.Schema ({
  room_name: 'String',
  photo_url: 'String',
  description: 'String',
});

const photosDb = mongoose.model('photos_db', schema);

const getPhoto = function getPhotoByName(name, cb) {
  photosDb.find({room_name: name}, (err, doc) => {
    if (err) throw err;
    cb(doc);
  })
}

const postPhoto = function postPhotoUrlPathname(photoObject, cb) {
  photosDb.create(photoObject, (err, doc) => {
    if (err) throw err;
    cb(doc);
  })
}

const putPhoto = function modifyPhotoInformation(conditions, update, cb) {
  photosDb.findOneAndUpdate(conditions, update, (err, doc) => {
    cb(doc);
  })
}

const deletePhoto = function deletePhoto(name, cb) {
  photosDb.findOneAndDelete(name, (err, doc) => {
    cb(doc);
  })
}

exports.modules = { getPhoto, postPhoto, putPhoto, deletePhoto };

const postgresRoomData = {
  id: 1,
  name: 'living-room',
};

const postgresPhotoData = [
  {
    url: '1.jpeg',
    description: 'small carpeted living room with white couch and purple drapes',
  },
  {
    url: '2.jpeg',
    description: 'large bedroom with brown drapes and white dresser',
  },
];

const cassandraData = {
  id: 1,
  name: 'living-room',
  related: {
    '1.jpeg': 'small carpeted living room with white couch and purple drapes',
    '2.jpeg': 'large bedroom with brown drapes and white dresser',
  },
};

module.exports = { postgresRoomData, postgresPhotoData, cassandraData };

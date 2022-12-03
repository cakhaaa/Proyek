const mongoose = require('mongoose');

const Users = require('./user');

const config = require('../core/config')

mongoose.connect(
  'mongodb+srv://yuno:GwwQHs3YHYRNuN6C@cluster0.rszuqh5.mongodb.net/test',
);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB server!');
});

module.exports = {
  db,
  Users,
  config,
};
const mongoose = require('mongoose');
const User = require('../models/User');

const mongoUri = 'mongodb://localhost:27017/mydatabase'; // update if necessary

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const sampleUsers = [
  { name: 'Alice', age: 28, email: 'alice@example.com' },
  { name: 'Bob', age: 35, email: 'bob@example.com' },
  { name: 'Charlie', age: 22, email: 'charlie@example.com' },
];

async function seed() {
  try {
    await User.deleteMany({});
    await User.insertMany(sampleUsers);
    console.log('Sample users inserted!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error inserting sample users:', err);
    mongoose.connection.close();
  }
}

seed();
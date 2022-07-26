const mongoose = require('mongoose');
// db connection
if (process.env.MONGODB_HOST && process.env.DB_PASSWORD) {
  const DB = process.env.MONGODB_HOST?.replace(
    '<password>',
    process.env.DB_PASSWORD
  );
  mongoose.connect(DB).then(() => console.log('db connected'));
}

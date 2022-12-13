const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log(`Connected at ${db.host}:${db.port}`);
});





// const mongoose = require('mongoose')
// require('dotenv').config();

// console.log(process.env.DATABASE_URL);

// mongoose.connect(
//     process.env.DATABASE_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// .then(instance => {
//     console.log(`Connected on ${instance.connections[0].name}`)
// })
// .catch(err => console.log(`Error! See details: ${err}`))
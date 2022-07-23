const mongoose = require('mongoose')
require('dotenv').config();

console.log(process.env.DATABASE_URL);

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
})

.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`Got an error plant friend, see details: ${err}`))
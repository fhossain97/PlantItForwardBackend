//ok
const mongoose = require('mongoose')

const mongoURI = 'mongodb://127.0.0.1:27017/plant-it-forward'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})

.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`Got an error plant friend, see details: ${err}`))
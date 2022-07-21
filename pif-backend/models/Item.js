const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
    name: String,
    quantity: Number,
    image: String,
    description: String,
    genus: String,
    status: String
},
{timestamps: true}
)

const Item = mongoose.model("Item", itemSchema)

module.exports = Item
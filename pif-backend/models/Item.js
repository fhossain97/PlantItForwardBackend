const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema ({
    name: String,
    quantity: Number,
    images: String,
    description: String,
    genus: String,
    status: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
},
{timestamps: true}
)

const Item = mongoose.model("Item", itemSchema)

module.exports = Item
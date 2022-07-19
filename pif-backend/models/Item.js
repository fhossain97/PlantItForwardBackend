import mongoose from 'mongoose'

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
export default Item 
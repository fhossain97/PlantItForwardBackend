import Item from '../models/Item.js'

export const index = (req, res) => {
    Item.find({}, (err, items) => {
        if(err) {
        res.status(400).json(err)
        return 
    }
    res.json(items)
})
}

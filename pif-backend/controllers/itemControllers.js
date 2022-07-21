const Item = require('../models/Item')

const index = (req, res) => {
    Item.find({}, (err, items) => {
        if(err) {
        res.status(400).json(err)
        return 
    }
    res.json(items)
})
}

module.exports = {
    index
}
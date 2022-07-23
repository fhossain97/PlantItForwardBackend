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

const showOneItem = (req,res) =>{
    Item.findById(req.params.id, (err, item) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(item)
    })
}

const createNewItem = async (req,res) =>{
    let newItem = await Item.create(req.body)
    res.json(newItem)
}

const updateItem = (req,res) =>{
    Item.findByIdAndUpdate(req.params.id, req.body, (err,item) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Item.find({}, (error, items) =>{
            res.json(items)
        })
    })
}

const deleteItem = (req,res) =>{
    Item.findByIdAndDelete(req.params.id, (err, item) =>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(item)
    })
}

module.exports = {
    index,
    showOneItem,
    createNewItem,
    updateItem,
    deleteItem
}
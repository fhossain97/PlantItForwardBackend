const Item = require('../models/Item')
const {uploads}= require('../db/cloudinary')

const index = (req, res) => {
    Item.find({}, (err, items) => {
        if(err) {
        res.status(400).json(err)
        return 
    }
    res.json(items)
})
.populate("owner")
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
    console.log(req.file);
    if (req.file) {
      req.body.images = req.file.path;
    }
console.log(req.body)
    let newItem = await Item.create(req.body)
    newItem.save(() => console.log("New Plant Saved!"));
    Item.findById(newItem._id)
    .populate("owner")
    res.json(newItem)
}

const updateItem = (req,res) =>{
    console.log(req.file);
    if (req.file) {
      req.body.images = req.file.path;
    }
    console.log(req.body);
    Item.findByIdAndUpdate(req.params.id, req.body, (err,item) => {
        if(err){
            res.status(400).json(err)
            return
        }
        Item.find({}, (error, items) =>{
            res.json(items)
        })
    })
    .populate("owner")
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

const newRoute = (req, res) => {
    res.render("new");
  };


const editRoute = (req, res) => {
    res.render("edit", { item: Item, id: req.params.id });
  } 

module.exports = {
    index,
    showOneItem,
    createNewItem,
    updateItem,
    deleteItem,
    newRoute,
    editRoute
}
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
    console.log(req.file);
    if (req.file) {
      req.body.images = "/" + req.file.filename;
    }

    let newItem = await Item.create(req.body)
    newItem.save(() => console.log("New Plant Saved!"));
    Item.findById(newItem._id)
    res.json(newItem)
}

const updateItem = (req,res) =>{
    console.log(req.file);
    if (req.file) {
      req.body.images = "/" + req.file.filename;
    }
    console.log(req.file);
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
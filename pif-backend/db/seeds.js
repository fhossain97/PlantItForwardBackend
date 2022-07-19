require('./connection')
const Item = require('../models/Item')

const items = 
    [
        {   
            name: 'Lantern Flower, Lifesaver Plant',
            quantity: 2,
            image: 'https://i.imgur.com/SIk0jGM.jpg',
            description: 'Two available.  Each have baby flower buds!',
            genus: 'Ceropegia',
            status: '1 available' 
        },
        {   
            name: 'Jade Plant',
            quantity: 5,
            image: 'https://imgur.com/v1EO74r',
            description: 'First come, first serve!  5 little jades available :) ',
            genus: 'Ceropegia',
            status: '5' 
        },
        {   
            name: 'Living Stone - Lithops',
            quantity: 1,
            image: 'https://imgur.com/shhhl5j',
            description: 'I grew these from seeds!  Last one. Looking for rare plant for trade.',
            genus: 'Lithops',
            status: '0' 
        },
        {   
            name: 'Wandering Dude - T. zebrina pendula',
            quantity: 4,
            image: 'https://imgur.com/SIk0jGM',
            description: 'Available to a good plant parent!',
            genus: 'Tradescantia',
            status: '4 available' 
        },
        {   
            name: 'String of pearls',
            quantity: 1,
            image: 'https://i.imgur.com/z9CWxux.jpg',
            description: '1 left!',
            genus: 'Curio',
            status: '1 available' 
        },

    ]


    Item.deleteMany({})
    .then(() => {
        return Item.insertMany(items)
    })
    .then((insertedItems) => {
        console.log(insertedItems)
    })
    .finally(() => {
        process.exit()
    })
    
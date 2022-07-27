require('./connection')
const Item = require('../models/Item')

const items = 
    [
        {   
            name: 'Lantern Flower - Lifesaver Plant',
            quantity: 2,
            images: 'https://i.imgur.com/SIk0jGM.jpg',
            description: 'Two available.  Each have baby flower buds!',
            genus: 'Ceropegia',
            status: '1 available' 
        },
        {   
            name: 'Jade Plant',
            quantity: 5,
            images: 'https://i.imgur.com/v1EO74r.jpeg',
            description: 'First come, first serve!  5 little jades available :) ',
            genus: 'Ceropegia',
            status: '5' 
        },
        {   
            name: 'Living Stone - Lithops',
            quantity: 1,
            images: 'https://i.imgur.com/shhhl5j.jpeg',
            description: 'I grew these from seeds!  Last one. Looking for rare plant for trade.',
            genus: 'Lithops',
            status: '0' 
        },
        {   
            name: 'Wandering Dude - T. Zebrina Pendula',
            quantity: 4,
            images: 'https://i.imgur.com/SIk0jGM.jpeg',
            description: 'Available to a good plant parent!',
            genus: 'Tradescantia',
            status: '4 available' 
        },
        {   
            name: 'String of Pearls',
            quantity: 1,
            images: 'https://i.imgur.com/z9CWxux.jpg',
            description: '1 left!',
            genus: 'Curio',
            status: '1 available' 
        },
        {   
            name: 'Japanese Camellia',
            quantity: 5,
            images: 'http://s3-us-west-2.amazonaws.com/cypdb/350w/camellia-japonica-flower.jpg',
            description: 'There are many cultivars with flowers up to 6 inches in winter-spring. The colors are variable. The gardener needs to watch for scales, aphids, chewing insects and fungal diseases. It requires acid soil and will have problems if pH is too high.',
            genus: 'Camellia',
            status: '5 plants available' 
        },
        
    ]


    Item.deleteMany({})
    .then(() => {
        return Item.insertMany(items)
    })
    .then((insertedItems) => {
        console.log(insertedItems)
    })
    .catch(err => console.error(err))
    .finally(() => {
        process.exit()
    })
    
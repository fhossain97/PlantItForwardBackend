require('./connection')
const Item = require('../models/Item')

const items = 
    [
        {   
            name: 'Lantern Flower - Lifesaver Plant',
            quantity: 2,
            images: 'https://i.imgur.com/AAI7uSr.jpg',
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
            images: 'https://i.imgur.com/ghmzbcC.jpg',
            description: 'There are many cultivars with flowers up to 6 inches in winter-spring. The colors are variable. The gardener needs to watch for scales, aphids, chewing insects and fungal diseases. It requires acid soil and will have problems if pH is too high.',
            genus: 'Camellia',
            status: '5 plants available' 
        },
        {   
            name: 'Virginia Blue Fern',
            quantity: 2,
            images: 'https://i.imgur.com/rSoEYEF.jpg',
            description: 'Get you some blue rabbits foot fern.  Its a great fern for a terrarium.',
            genus: 'Phlebodium',
            status: 'Just 2 plants available' 
        },
        {
            name: 'Purple Amaranth',
            quantity: 1,
            images: 'https://i.imgur.com/3anRDNz.png?1',
            description: 'Can you believe this beautiful plant is edible?  Eat the leaves or the grain.  Throw it in your salads and on your sandwiches!',
            genus: 'Amaranthus',
            status: 'Just 1 left' 
        },
        {   
            name: 'Succulent Echeveria Propogates',
            quantity: 50,
            images: 'https://i.imgur.com/RaqLon9.jpg',
            genus: 'Echeveria',
            status: 'I have many propogates - let me know how many you need!' 
        },
        {   
            name: 'Strawberry',
            quantity: 5,
            images: 'https://i.imgur.com/MwIFBkK.jpg',
            description: 'There are many cultivars with flowers up to 6 inches in winter-spring. The colors are variable. The gardener needs to watch for scales, aphids, chewing insects and fungal diseases. It requires acid soil and will have problems if pH is too high.',
            genus: 'Fragaria',
            status: '5 plants available' 
        },
        {   
            name: 'Mermaid Moss',
            quantity: 12,
            images: 'https://i.imgur.com/P7lFBCc.jpg',
            description: 'My mermaid is growing too much moss.  Contact me if you need some.',
            genus: 'Sphagnum',
            status: 'Get yourself a clump.' 
        },
        {   
            name: 'UFO plant',
            quantity: 2,
            images: 'https://i.imgur.com/pF8bwST.jpg',
            description: 'Also called Chinese money plant, pancake plant, and missionary plant.  I have 2.',
            genus: 'Pilea',
            status: '1 plant still available' 
        },
        {   
            name: 'Aloe Imma Plant',
            quantity: 5,
            images: 'https://i.imgur.com/3XWsSUV.jpg',
            genus: 'Aloe',
            status: '5 plants available' 
        },
        {   
            name: 'Neon Pothos',
            quantity: 4,
            images: 'https://i.imgur.com/Qj9pOZ1.jpg',
            description: 'Get it while its hot.',
            genus: 'Epipremnum',
            status: '4 plants available' 
        },
        {   
            name: 'Polka Dot Begonia',
            quantity: 1,
            images: 'https://i.imgur.com/uxMSmCt.jpg',
            description: 'The leaves are red underneath!',
            genus: 'Begonia',
            status: '1 plants available' 
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
    
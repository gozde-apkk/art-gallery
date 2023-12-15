


const product  = [
    {name : 'Freedom',
     price: 20,
     size : [20,30],
     description: 'Abstract Geometric Forms',
     image : 'image1.jpg',
     like : 0,
     artistName : 'Puerto Rico'
    },
    {name : 'The Light',
    price: 50,
    size : [70,30],
    description: 'Abstract Geometric Forms',
    image : 'image1.jpg',
    like : 20,
    artistName : 'Ripon Saha'
   },
   {name : 'Void Creeper',
   price: 120,
   size : [50,80],
   description: 'Price on Request',
   image : 'image3.jpg',
   like : 10,
   artistName : 'Le Jandrier'
  },

]



const getAllProducts = async (req , res) => {
  try {
      const products = await ProductModel.find({});
      res.json ({products});
  } catch (error) {
      res.status(500).json({message : error.message});
  }
  }
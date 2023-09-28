const { getIndexView, getAllProducts,productCreation } = require("../services")

module.exports = {
  index: async (req, res) => {
    try {
      let indexView = await getIndexView();
      return res.render('index', { indexView: indexView });
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  },
  aboutUs: (req,res)=> {
    return res.render('aboutUs')
  },
  dashboard : (req, res) => {
    let products = getAllProducts()
    
    return res.render('dashboard', {products : products})
  },
  createProduct : (req, res) => {
    let products = getAllProducts()
    let category = req.body.category
    let product = {
      photo: "thisIsFine.png",
  name: req.body.name,
  price: req.body.price,
  tag: [
  req.body.tag1,
  req.body.tag2,
  req.body.tag3
  ],
  category: req.body.category
    }
    productCreation(category,product)
  return res.render('dashboard', {products : products})
  }
}
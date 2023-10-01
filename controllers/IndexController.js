const { getIndexView, getAllProducts,productCreation,searchedItems } = require("../services")

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
    productCreation(req)
  return res.redirect('/dashboard')
  }
}
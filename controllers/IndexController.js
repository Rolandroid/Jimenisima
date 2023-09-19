const { getIndexView } = require("../services")

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
    console.log("indexController check")   
    return res.render('dashboard', {})
  }
}
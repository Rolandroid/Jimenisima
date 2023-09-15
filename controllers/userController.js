const { getAllUsers, saveNewUser } = require("../services")


module.exports = {
  register: (req, res) => {
    return res.render('register', {})
  },
  registerProcess: async (req, res) => {
    try {
      saveNewUser({ ...req.body, avatar: "userDefault.png" })
      return res.render('login', {})
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  },
  login: (req, res) => {
    return res.render('login', {})
  },
  loginProcess: async (req, res) => {
    try {
      return res.redirect('/');
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  },
}

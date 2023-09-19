const { getAllUsers, saveNewUser, validarUsuario} = require("../services")


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
      const emailSearched = req.body.email;
      const passwordSearched = req.body.password;
      console.log(emailSearched);
      console.log(passwordSearched);



     let UsuarioAccedido = validarUsuario(emailSearched,passwordSearched)
      
     
      if (UsuarioAccedido) {
        
        req.session.userLogin = {UsuarioAccedido}
        
        console.log(req.session.userLogin.UsuarioAccedido.name + " " + req.session.userLogin.UsuarioAccedido.alias)

        console.log('Bienvenido ' + UsuarioAccedido.alias);
      } else {
        console.log('No se encontró ningún objeto con el atributo deseado.');
      }
      










      return res.redirect('/');
    } catch (error) {
      res.status(500).send("Error interno del servidor");
    }
  },
}

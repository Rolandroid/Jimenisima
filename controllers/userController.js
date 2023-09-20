const { getAllUsers, saveNewUser, validarUsuario } = require("../services")
const { validationResult } = require('express-validator')

module.exports = {
  register: (req, res) => {
    return res.render('register', {})
  },
  registerProcess: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      try {
        saveNewUser({ ...req.body, avatar: "userDefault.png" })
        return res.redirect('/users/login')
      } catch (error) {
        res.status(500).send("Error interno del servidor");
      }
    } else {
      console.log(errors)
      return res.render('register', {errors: errors.mapped(), old: req.body})
    }
  }
  ,
    login: (req, res) => {
      return res.render('login', {})
    },
      loginProcess: async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
             try {
               const emailSearched = req.body.email;
               const passwordSearched = req.body.password;

               let UsuarioAccedido = validarUsuario(emailSearched, passwordSearched)
               if (UsuarioAccedido) {
                 req.session.userLogin = { UsuarioAccedido }
               } else {
                 console.log('No se encontró ningún objeto con el atributo deseado.');
               }
             
               return res.redirect('/');
             } catch (error) {
               res.status(500).send("Error interno del servidor");
             }
            }else{
              console.log(errors)
              return res.render('login', {errors: errors.mapped(), old: req.body})
            }
      },
      logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}

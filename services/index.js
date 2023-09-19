const fs = require('fs')
const path = require('path')
const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });


module.exports = {
  getAllProducts: () => {
    let products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8'));
    return products
  },
  getAllUsers: () => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'));
    return users
  },
  getIndexView: () => {
    try {
      const filePath = path.join(__dirname, '../data/products.json');
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const products = JSON.parse(rawData);

      const categoriesList = Object.keys(products);
      const recommended = products.Busos;

      let indexView = {
        categoriesList,
        recommended
      };
      return indexView;
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
      throw error;
    }
  }
  ,
  getTags: async () => {
    try {
      const products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8'));

      const tagList = [];

      for (let i = 0; i < products.length; i++) {
        const tags = products[i].tag;

        tagList.push(...tags);
      }
      console.log(tagList);
    } catch (error) {
      console.error("Error al leer el archivo JSON:", error);
    }
  },
  saveNewUser : (user) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'));
    users.push(user)
    fs.writeFileSync(path.resolve(__dirname, ".." ,"data", "users.json" ), JSON.stringify(users, null, 3), 'utf-8')
},
validarUsuario : (emailSearched, passwordSearched) => {
  let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'));

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === emailSearched && users[i].password === passwordSearched) {
      return users[i];
    }
  }
  return null; 


}




}




const fs = require('fs')
const path = require('path')
const { compareSync } = require('bcryptjs');
const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });


module.exports = {
  searchedItems:(req) =>{
    let products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8'));
    let searchWord = req.body.serchInput
    console.log(searchWord)
  },
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
      const recommended = products.Buzos;

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
  saveNewUser: (user) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'));
    users.push(user)
    fs.writeFileSync(path.resolve(__dirname, "..", "data", "users.json"), JSON.stringify(users, null, 3), 'utf-8')
  },
  validarUsuario: (emailSearched, passwordSearched) => {
    let users = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8'));

    for (let i = 0; i < users.length; i++) {
      console.log(users[i].password)
      if (users[i].email === emailSearched && compareSync(passwordSearched, users[i].password)) {
        return users[i];
      }
    }
    return null;


  },
  productCreation: (req) => {
    let products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8'));
    let category = req.body.category
    let product = {
      photo: "productDefault.png",
      name: req.body.name,
      price: req.body.price,
      discount: req.body.discount,
      tag: [
        req.body.tag1,
        req.body.tag2,
        req.body.tag3
      ],
      category: category
    }

    if (category === "Stickers") {
      products.Stickers.push(product)
    }
    if (category === "Buzos") {
      products.Buzos.push(product)
    }
    if (category === "Gorros") {
      products.Gorros.push(product)
    }
    if (category === "Posters") {
      products.Posters.push(product)
    }

    fs.writeFileSync(path.resolve(__dirname, "..", "data", "products.json"), JSON.stringify(products, null, 3), 'utf-8')


    console.log(products)

    console.log(category)
    console.log(product)

  }




}




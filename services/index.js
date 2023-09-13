const fs = require('fs')
const path = require('path')
const convertFormatPeso = (n) =>
  n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  
module.exports = {
    getAllProducts :  () => {
        let products = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8'));
        return products
    },
    getIndexView: () => {
      try {
        // Leer el archivo JSON
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
    getTags : async ()  => {
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
      
}
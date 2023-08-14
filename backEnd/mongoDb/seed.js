const { db } = require("../mongoDb/main");
const {Product} = require("../mongoDb/Model.js");

const sampleData = require("../../react-client/data.json");

const insertSampleProducts = function () {
  Product.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully")
    })
    .catch((error) => {
      console.log("error seeding the database: ", error)
    })
    .finally(() => {
      db.close();
    });
};

insertSampleProducts();
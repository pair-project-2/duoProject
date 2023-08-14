const mongoose = require("mongoose");
const { Product }= require('./Model.js')
const mongoUri = "mongodb://127.0.0.1/Outlet";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;

const getAllProducts = () => {
 return Product.find()

};
const deleteOne = (id) => {
    console.log(id);
    return Product.findByIdAndDelete({ _id:id });
  };

  const update = (id, data) => {
    return Product.findOneAndUpdate({_id:id}, data, { new: true });
  };

module.exports = {
  db,
  getAllProducts,
  
};
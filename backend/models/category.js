import mongoose from "mongoose";

const categorySchema=mongoose.Schema({
name:String,
createdBy:String,
})

 const Category=mongoose.model('Category',categorySchema);
 export default Category;
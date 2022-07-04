import mongoose from "mongoose"
import Category from "../models/category"
import Task from "../models/task";
export const createCategory= async(req,res)=>{
    const cat=req.body;
    const newCategory=new Category(cat);
  
    try{
     
    await   newCategory.save()
    res.status(201).json(newCategory);
    }catch(error){
      res.status(500).json({
       error:true,
       message:'could not save  category'
      })
    }

}
export const getCategory=async(req,res)=>{
    const id = req.params.id
 
     try{
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send('No post with that id');
        }
        const category= await Category.findById(id);
        res.status(200).json(category);
     }catch(error){
         res.status(404).json({
             error:true,
             message:error.message
            })
     }
   
}
export const getCategories=async(req,res)=>{
try{

const categories= await Category.find();
res.status(200).json (categories);   
}catch(error){
    res.status(404).json({message:error.message})
}

}
export const updateCategory= async(req,res)=>{
   console.log("herer updating")
    const id = req.params.id;
    const cat=req.body
  
      try{
         if(!mongoose.Types.ObjectId.isValid(id)){
             return res.status(404).send('No Category with that id');
         }
         const updatedCategory= await Category.findByIdAndUpdate(id,cat,{new:true});
         res.status(200).json(updatedCategory);
      }catch(error){
          res.status(404).json({message:error.message})
      }
   


}
export const deleteCategory=async(req,res)=>{

const id=req.params.id;
if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('No category with that id'+id);
}

await Category.findByIdAndDelete(id);
res.json({message:'category deleted sucessfully'})

}


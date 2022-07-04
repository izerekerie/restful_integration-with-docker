import mongoose from "mongoose";
const  taskSchema=mongoose.Schema({
    title:{
        type:"string",
        required:[true,"title required"]
    },
    createdBy:{
        type:"string",
        required:[true,"createby required"]
    },
    category:{
        type:"string",
        required:[true,"category required"]
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
    
})

const Task=mongoose.model('Task',taskSchema);
export default  Task;
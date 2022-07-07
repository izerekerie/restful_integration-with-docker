import mongoose from "mongoose";
const  dataSchema=mongoose.Schema({
    data1:{
        type:"string",
        required:[true,"data required"]
    },
    data2:{
        type:"string",
        required:[true,"data required"]
    },
    data3:{
        type:"string",
        required:[true,"data required"]
    },
    data4:{
        type:Date,
        default:new Date()
    }
    
})

const Data=mongoose.model('Data',dataSchema);
export default  Data;
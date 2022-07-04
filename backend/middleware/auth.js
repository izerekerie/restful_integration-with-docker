
import  jwt from 'jsonwebtoken'
import {User} from '../models/user';


export const auth=async(req,res,next)=>{

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{

            const token=req.headers.authorization.split(" ")[1]
            // console.log(token);
      
           
            const  decodedData= jwt.verify(token,process.env.JWT_SECRET);
            // decodeData will have id we passed in token generation
                req.user= await User.findById(decodedData?.id)
                //.select('-password') we don't want to display password
                // req will available to next opearatoion
                next()
          
        }catch(error){
           res.json({message:'Session expired'});
        }
    }else{
        res.status(404).json({message:'unauthorized'})
    }
    

}

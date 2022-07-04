import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import {User,validate} from '../models/user'
import jwt from 'jsonwebtoken'
export const sign_up= async(req,res)=>{
const { error } = validate(req.body);

if (error) return res.status(400).send(error.message);

const {name,email,password}=req.body;
try{
const existingUser= await User.findOne({email})
if(existingUser) return res.status(400).json({message:'user already exist'})
//hash password
const salt=await bcrypt.genSalt(Number(process.env.SALT));
const hashedPassword=await bcrypt.hash(password,salt);

const createdUser= await User.create({name,email,password:hashedPassword})
//generate token

const token=jwt.sign({id:createdUser._id},
    process.env.JWT_SECRET,
    {expiresIn:'2h'});
 res.status(200).json({createdUser,token});
}catch(error){
res.status(500).json(error.message)
}

}

export const sign_in=async(req,res)=>{
    //  const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.message);
   console.log(req.body.password)
    const {email,password}=req.body;
    //console.log(password);
    try{
        const existingUser= await User.findOne({email})
        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        if( existingUser && isPasswordCorrect) {
           const token=jwt.sign({id:existingUser._id},
             process.env.JWT_SECRET,{expiresIn:'2h'}
            )

            res.status(200).json({existingUser,token});
        }else{
             res.status(404).json({message:'Invaid email or password'})
        }
       
        
    }catch(error){
     res.status(500).json(error.message)
    }
};


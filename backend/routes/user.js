import express from "express";
import {sign_up,sign_in} from '../controllers/user'
const router=express.Router();

router.post('/signup',sign_up);
router.post('/signin',sign_in);


export default router
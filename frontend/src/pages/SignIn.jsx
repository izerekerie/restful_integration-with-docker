import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
function SignIn() {
 const navigate=useNavigate();   

const [formData,setFormData]=useState({
    email:'',
    password:''
})
const handleOnChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
e.preventDefault()
console.log("trying to login")
try{
    console.log('request: ', JSON.stringify(formData));
    Axios.post('http://localhost:2000/users/signin',formData).then((reponse)=>{
        console.log(reponse)
        localStorage.setItem('user',JSON.stringify(reponse.data));
    })
    navigate('/categories')
}catch(err){
    console.log(err.response.data)
}

}

    const  [signin,setSignin]=useState(true);
  
  return (
<div style={{height:'100vh',width:'100%'}} className='row '>
        
<div className=" container bg-primary  col-6">
    <div className="row align-items-center  ">
        <div className="h4 text-light text-center my-4 ">T-WEB</div>
    </div>
  
</div>
{signin?
   (

        <div className=" container  col-6 ">

   
        <p className="h2 text-primary fw-bold text-center py-5">Sign in</p>
      <div className='  row justify-content-center'>
        <form className=" w-75 ">
            <div className="form-group my-4">
                <label htmlFor="email" >Email</label>
            <input type="text" className="form-control " id="email"  name="email" placeholder='Enter email ' 
            onChange={handleOnChange}
            />
            </div>
    
            <div className="form-group my-4">
                <label htmlFor="password">Password</label>
                <input type="text" onChange={handleOnChange} className="form-control"  id='password' name="password" placeholder='Enter password'/>
            </div>
            <button className="btn btn-primary text-light rounded btn-lg w-100 my-4" onClick={handleSubmit}>Sign in</button>
            <div className='d-flex justify-content-center'>
        <p className="text-center text-primary">Have no account? register</p>
        <p className='text-success'onClick={()=>setSignin(false)}>here</p>
        </div>
        </form>
        </div>
       
    </div>
    
       ):(
        <div className=" container  col-6 ">

   
    <p className="h2 text-primary fw-bold text-center py-5">Sign up</p>
  <div className='  row justify-content-center'>
    <form className=" w-75 ">
    <div className="form-group my-4">
            <label htmlFor="name" >Name</label>
        <input type="text" className="form-control " id="name"  placeholder='Enter names ' />
        </div>
        <div className="form-group my-4">
            <label htmlFor="email" >Email</label>
        <input type="text" className="form-control " id="email"  placeholder='Enter email ' />
        </div>

        <div className="form-group my-4">
            <label htmlFor="password">Password</label>
            <input type="text" className="form-control"  id='password' placeholder='Enter password'/>
        </div>
        <button className="btn btn-primary text-light rounded btn-lg w-100 my-4">Sign in</button>
        <div className='d-flex justify-content-center'>
        <p className="text-center text-primary">Already have account? login</p>
        <p className='text-success'onClick={()=>setSignin(true)}>here</p>
        </div>
       
    </form>
    </div>
   
</div>   
       )}


    </div>
  )
}

export default SignIn
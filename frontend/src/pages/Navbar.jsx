import React from 'react'
const handleLogout= ()=>{
  window.localStorage.clear()
}
function Navbar() {
  return (
    <div className='navbar navbar-expand-lg  text-light navbar-dark bg-primary' >
        
        <div className="container">
        <a  href="/" className="navbar-brand">
            <p className='text-light'> T-WEB</p>
           </a>
           <button className="navbar-toggler" 
           type='button'
           data-bs-toggle="collapse"
           data-bs-target="#navbarContent"
           >
            <span className="navbar-toggler-icon"></span>
           </button>
           <div className='collapse navbar-collapse' id="navbarContent">
           <ul className='navbar-nav ms-auto'>
 
            <li className="nav-item">
            <a href="#" className="nav-link active link-light">Home</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link link-light">Tasks</a>
            </li>
            <li className="nav-item">
            <a href="#" className="nav-link link-light">Categories</a>
            </li>
                <li className="nav-item dropdown">
            <a href="#" className="nav-link  link-light dropdown-toggle" id="sublinks" role="button" data-bs-toggle="dropdown">dropdown link</a>
            <ul className='dropdown-menu' aria-labelledby="navbarDropdownMenuLink">
                <li className='dropdown-item '> <a className='link' href="#">item1</a></li>
                <li className='dropdown-item'> <a className='link' href="#">item1</a></li>
            </ul>
            </li>
         
            <li onClick={handleLogout} className="nav-item">
            <a href="#"  className="nav-link link-primary text-primary bg-white p-2 rounded">Logout</a>
            </li>
            </ul>
           </div>
 
        </div>



    </div>
  )
}

export default Navbar
import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'

import List from './pages/List'
import SignIn from './pages/SignIn'
import Categories from './pages/Categories'
import Tasks from './pages/Tasks'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
 import "../sass/main.css"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
const user=JSON.parse(localStorage.getItem("user"))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   
   <Routes>
   <Route path='/' element={user?.token?<Categories />:<SignIn/>} />
    <Route path='/categories' element={user?.token?<Categories />:<SignIn/>} />
    <Route path='/tasks' element={user?.token?<Tasks />:<SignIn/>} />
  <Route path='/signin' element={<SignIn />}/>
   </Routes>
 
   </BrowserRouter>
  </React.StrictMode>
)

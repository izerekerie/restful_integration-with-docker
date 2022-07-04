
import React,{useEffect} from 'react'
import Navbar from '../components/Navbar'
import Axios  from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Tasks() {
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('user'));
  const [search,setSearch]=useState('');
  const [categories,setCatData]=useState([]);
  const [tasks,setTasks]=useState([]);
  const [edit,setEdit]=useState(false);
  const [current,setCurrent]=useState(null);// for updating we need id 
  const [formData,setFormData]=useState({
  title:'',
  category:'',
  createdBy:user.existingUser.name

})
useEffect(()=>{
  Axios.get('http://localhost:2000/categories').then((res)=>{
    setCatData(res.data);
  },[]);
})
 
useEffect(()=>{
Axios.get('http://localhost:2000/tasks').then((response)=>{
setTasks(response.data);
})
},[tasks])
const handleChange=(e)=>{
 setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSearchChange=(e)=>{
  setSearch(e.target.value)
  console.log("searching :",search)
}
const handleSearch=(e)=>{
e.preventDefault();
console.log("here search",search)
try{
Axios.get(`http://localhost:2000/tasks/search/${search}`,{headers:{
  "Authorization":`Bearer ${user.token}`
}}).then((res)=>{

  console.log("now task",res.data)
  setTasks(res.data);
  console.log(tasks)
})
}catch{
console.log(error.message);
}

}

const handleEdit=(id,cat)=>{
  setEdit(true);
  setFormData(cat);
  setCurrent(id);
}
const handleDelete=(id)=>{
Axios.delete(`http://localhost:2000/tasks/${id}`,{headers:{
  "Authorization": `Bearer ${user.token}`
}}).then((res)=>{
  console.log("message",res.data)
});

}
const handleSubmit=async(e)=>{
e.preventDefault();

try{
  if(current!=null){
   console.log("current",current)
    await Axios.put(`http://localhost:2000/tasks/${current}`,formData,{headers:{
      "Authorization":`Bearer ${user.token}`}}).then((res)=>
      console.log("edited: ",res.data))
      setEdit(false);
      setCurrent(null);
  }else{
  await Axios.post('http://localhost:2000/tasks',formData,{headers:{
    "Authorization":`Bearer ${user.token}`
  }}).then((res)=>{
 
    setFormData({...formData,title:''})
    console.log("first",formData)
  })
}
}catch(err){
  console.log("message",err.message)
}

}
  return (
    <div>
<Navbar/>

     <div className="container">
        <div className=" h4 text-primary p-4 d-flex justify-content-between w-80">
            <p>Welcome kerie</p>
            <button className="tn btn-primary btn-lg text-light rounded"
            
            data-bs-toggle="modal"  data-bs-target="#taskForm"
            >Add task</button>
        </div>
        <div>
          <div className="input-group">
            <input type="search" value={search} name='query'  onChange={handleSearchChange} className="form-control" placeholder='search task' />
            <button  onClick={handleSearch} id="search-button" type="button" class="btn btn-primary">
    <i class="bi bi-search"></i>
  </button>
          </div>
        </div>
        <div  className='container'>
        <div className=" row g-4 ">
           
           {tasks.map((task)=>(
              <div className="col-12 col-md-4 p-4  ">
              <div className='card bg-dark text-light  shadow-sm rounded'>
              <div className="card-body ">
              <p className='h5'>{task.title}</p>
                <p className="">{task.createdAt}</p>
                <button   data-bs-toggle="modal"  data-bs-target="#taskForm" onClick={()=>{handleEdit(task._id,task)}} className="btn btn-light rounded p-2 mx-1">
                <i className='bi bi-pencil-fill text-success mx-2'/> edit
              </button>
              <button onClick={()=>handleDelete(task._id)} className="btn btn-light rounded p-2 mx-1">
              <i className='bi bi-trash-fill text-danger mx-2'/> delete
              </button>
              

              </div>
              </div>
              </div>
           ))} 
           


        </div>
      </div>

      </div>

      <div className="modal fade" id='taskForm'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{edit?'Edit':'Add'}task</h5>
              <button type='button' className="btn-close"
              data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body p-5">
              <form action="">
              <div className="form-group my-4">
              
                <input className='form-control'  value={formData.title} type="text" name='title' onChange={handleChange} placeholder="Enter task name" />
              </div>
              <select name="category" onChange={handleChange} id="" className="form-select my-4">
              <option selected>{edit? `${formData.category}`:'Choose category'}</option>
                {categories.length > 0 && categories.map((cat,i)=>(
                  <>
              <option key={i} value={`${cat.name}`}>{cat.name}</option>
                  </>

                ))}
               
              </select>
              </form>
             
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger"
              data-bs-dismiss="modal"
              >close</button>
            <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
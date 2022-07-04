import React,{useEffect,useState} from 'react'
import Navbar from '../components/Navbar'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
function Categories() {
  const user=JSON.parse(localStorage.getItem("user"))
  const [categories,setCategories]=useState([]);
   const [edit,setEdit]=useState(false)
   const [current,setCurrent]=useState(null)
  const [catData,setCatData]=useState({
    createdBy:user.existingUser.name,
    name:''
  });

  const handleChange=(e)=>{
    setCatData({...catData,[e.target.name]:e.target.value})
  }
  const handleEdit=(id,cat)=>{
    setCatData(cat)
    setEdit(true);
    setCurrent(id)
    }
  const handleSubmit= async(e)=>{
   
  e.preventDefault()
  
  try{
    console.log("to be updated",current)
    if(current!=null){
      await Axios.put(`http://localhost:2000/categories/${current}`,catData,{
        headers:{
          'Authorization':`Bearer ${user.token}` 
        }}).then((response)=>{
         
      console.log(" edited:",response.data);
      setCatData({...catData,name:''})// clear data in input name
      })
    }else{
    await Axios.post("http://localhost:2000/categories",catData,{
      headers:{
        'Authorization':`Bearer ${user.token}` 
      }}).then((response)=>{
       
    console.log(" good:",response.data);
    setCatData({...catData,name:''})// clear data in input name
    })
    }
  }catch(error){
    console.log(error.message)
  } 
  }

  const getAll= async ()=>{
    try{
      await Axios.get('http://localhost:2000/categories')
      .then(response => {
        setCategories(response.data);
      })
 
      }catch(err){
        console.log(err)
      }
  }


const handleDelete=(id)=>{
console.log("first",id)
    Axios.delete(`http://localhost:2000/categories/${id}`,{headers:{
    "Authorization":`Bearer ${user.token}`
   }});
  
}
  useEffect(() => {
    getAll();
  }, [categories] )


  return ( 
        
    <>
    <Navbar/>
        <div className='container'>
          <button className="text-light bg-primary rounded p-2 my-4"
            data-bs-toggle="modal"
            data-bs-target="#categoryForm"
          >Add category</button>
          <div className="row justify-content-center my-5">
          <div className="accordion">
            
           {categories.length > 0 && categories.map((cat,i)=>(
    <div key={i} class="accordion-item">
    <div class="accordion-header" id="">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#category-${i}`} aria-expanded="true" >
        {cat.name} 
      
      </button>
    
    </div>
    <div id={`category-${i}`} class="accordion-collapse collapse show" aria-labelledby="headingOne" >
      <div class="accordion-body">
    <p>list of tasks in catefory</p>
    <button 
      data-bs-toggle="modal"
      data-bs-target="#categoryForm"
    onClick={()=>handleEdit(cat._id,cat)} className="btn btn-light rounded p-2 mx-1">
                <i className='bi bi-pencil-fill text-success mx-2'/> edit
            </button>
            <button className="btn btn-light rounded p-2 mx-1">
            <i   onClick={()=>handleDelete(cat._id)} className='bi bi-trash-fill text-danger mx-2'/> delete
            </button>
      </div>
    </div>
    </div>
            ))} 



    </div>
          </div>  
        </div>

        <div className="modal" id='categoryForm'>
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
            <div className="modal-header">
            <div className="modal-title">{edit?'Edit':'Add'} category</div>
            <button className='btn-close'
            data-bs-dismiss="modal"
            ></button></div>
            <div className="modal-body p-4">
              <form action="">
                <input type="text" className="form-control" name='name' value={catData.name} onChange={handleChange} placeholder='Enter category name' />
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">close</button>
              <button className='btn btn-primary' onClick={handleSubmit}> save</button>
            </div>
            </div>
          </div>
        </div>
        </>

      )
}

export default Categories
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/banner.svg'
import instr from '../assets/instr.png'
function Home() {
  return (
    <div>
    <nav  className='navbar fixed-top navbar-dark navbar-expand-lg bg-dark py-3'>
     <div className="container">
     <a href="#" className="navbar-brand">FRONTEND BOOTCAMP</a>
    <button  className="navbar-toggler "
    type='button'
    data-bs-toggle="collapse"
    data-bs-target="#navmenu"
    aria-controls="navmenu"
    aria-expanded="false"
    >
<span className="navbar-toggler-icon"></span>
    </button>
     <div  className=" collapse navbar-collapse " id="navmenu">

<ul className="navbar-nav ms-auto">
  <li className="nav-item">
    <a href="#learn" className="nav-link link-light"> what you will leanr</a>
  </li>
  <li className="nav-item">
    <a href="#questions" className="nav-link link-light"> Qestions</a>
  </li>
  <li className="nav-item">
    <a href="#instructors" className="nav-link link-light"> Instructors</a>
  </li>
</ul>

     </div>
     </div>
    
    </nav>


    <section className="text-center mt-4 text-sm-start bg-dark text-light  p-lg-0 pt-lg-5">
      <div className="container">
        <div className='d-md-flex  align-items-center justify-content-between'>
        <div>
<h1>Become<span className='text-primary text-center'> a web developer</span></h1>
<p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt officia est possimus corporis blanditiis ipsam odio deleniti labore dolorem debitis eligendi aspernatur, aperiam accusantium non porro, obcaecati similique itaque at!
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sed voluptate, explicabo ita</p>
      
        <button className=' w-50 btn btn-primary my-4'>Enroll</button>
         </div>
         <img src={img} alt="" className='d-none d-md-block img-fluid w-50'/>
        </div>
        
      </div>
    </section>

    {/* NewsLetter */}


    <section   className="bg-primary text-light p-5">
                  <div className='container'>
              <div className=" row align-items-center ">
                <div className="col-10 col-md-5  ">
                <h3 className='  mb-md-0'>Sign Up For Our Newsletter</h3>
                </div>

             
             <div className="col-10 col-md-5 mt-4 mt-md-0">
             <div className=" input-group mt-sm-5">
               <input className='form-control  ' type="text" 
 placeholder='Enter your email'/>
               <button className='btn btn-dark btn-lg'>
                 Button
               </button>
             </div>
             </div>
          
             
              </div>
                  </div>

    </section>

{/*  Boxes*/}
    <section id='learn' className='p-5'>
<div className="container">
  <div className="row text-center g-4">
  <div className="col-12 col-md-4 p-4">
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1 mb-3">
          <i className="bi bi-laptop"></i>
          </div>
         <h3 className="card-title mb-3">Virtual</h3>
         <p className="card-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam saepe voluptas nihil odio blanditiis officia amet totam repudiandae ab dolorem veritatis facilis hic maiores doloribus quasi, explicabo mollitia nam.
         </p>
         <a href="#" className="btn btn-primary">React more</a>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 p-4">
      <div className="card bg-secondary text-light">
        <div className="card-body text-center">
          <div className="h1 mb-3">
          <i className="bi bi-person-square"></i>
          </div>
         <h3 className="card-title mb-3">Hybrid</h3>
         <p className="card-text">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam saepe voluptas nihil odio blanditiis officia amet totam repudiandae ab dolorem veritatis facilis hic maiores doloribus quasi, explicabo mollitia nam.
         </p>
         <a href="#" className="btn btn-dark">React more</a>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-4 p-4">
      <div className="card bg-dark text-light">
        <div className="card-body text-center">
          <div className="h1 mb-3">
          <i className="bi bi-people"></i>
          </div>
         <h3 className="card-title mb-3">Virtual</h3>
         <p className="card-text ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veniam saepe voluptas nihil odio blanditiis officia amet totam repudiandae ab dolorem veritatis facilis hic maiores doloribus quasi, explicabo mollitia nam.
         </p>
         <a href="#" className="btn btn-primary">React more</a>
        </div>
      </div>
    </div>


  </div>
</div>
    </section>


    {/* fundamentals */}

    <section >
      <div className="container">

        <div className="row mt-md-4 p-4   text-md-start text-center align-items-center justify-content-between">
          <div className='col-12 col-md-6'>
          <img  className='img-fluid' src={img} alt="" />
          </div >
      
          <div className='col-10 col-md-6 pt-8 pt-md-0 '>
            <h4 className='h4'>Learn The Fundamentals</h4>
          <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, est numquam? Animi fuga iure modi consectetur quam soluta eligendi corrupti quaerat voluptatum, debitis, provident architecto voluptate quia et maiores tempora?</p>
         <a href="#" className='btn btn-light mt-3'>
         <i class="bi bi-chevron-left"></i>
         Read more
         </a>
          </div>
        </div>
      </div>
    </section>
    <section className='bg-dark  p-4 '>
      <div className='container  '>
      <div className=" row align-items-center justify-content-between text-light text-center text-md-start">

<div className='col-12 col-md-6'>
  <p className='h4'>Learn React</p>
  <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut libero ipsa laudantium. Sequi, praesentium fuga. Consectetur voluptas eligendi exercitationem perferendis recusandae, tenetur porro reprehenderit
     tempora blanditiis esse dolores reiciendis perspiciatis!</p>
 <a href="#" className='btn btn-light mt-4'>
   <i className='bi bi-chevron-left'/>
   Readmore
 </a>
</div>
<div className=' col-12 col-md-6'>
<img src={img} alt="" className='img-fluid w-75 mt-md-0 mt-4' />

</div>
 </div>
      </div>
    
    </section>


    {/* question Accordion */}

    <section id='questions' className='p-5'>
<div className="container text-center">
  <p className='h1 mb-4'>Frequently Asked Questions</p>

  <div class="accordion" id="">

  <div class="accordion-item">
    <div class="accordion-header" id="">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" >
        Question 1
      </button>
    </div>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div className='accordion-item'>
    <div className="accordion-header">
      <button className="accordion-button"
      type='button'
      data-bs-toggle="collapse"
      data-bs-target="#collapseTwo"
      aria-expanded="true"
      >
        Question 2
      </button>
    </div>
    <div id="collapseTwo" className='accordion-collapse collapse show'>

      <div className="accordion-body">
<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum debitis, sunt, deleniti nisi vel tenetur, temporibus reiciendis laudantium iure a. Enim qui at, aliquam rerum quisquam dolorum iusto nihil!</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" id="">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" >
        Question 3
      </button>
    </div>
    <div id="collapse3" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  <div className='accordion-item'>
    <div className="accordion-header">
      <button className="accordion-button"
      type='button'
      data-bs-toggle="collapse"
      data-bs-target="#collapse4"
      aria-expanded="true"
      >
        Question 4
      </button>
    </div>
    <div id="collapse4" className='accordion-collapse collapse show'>

      <div className="accordion-body">
<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum debitis, sunt, deleniti nisi vel tenetur, temporibus reiciendis laudantium iure a. Enim qui at, aliquam rerum quisquam dolorum iusto nihil!</strong>
      </div>
    </div>
  </div>
  

</div>


</div>
    </section>


    <section id="instructors " className='bg-primary p-5'>
  
<div className="container">
  <h2 className='text-light text-center p-4'>Our Instructors</h2>
  <p className='lead text-center text-light mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis sed magnam esse, aliquam repudiandae doloremque aut saepe consequuntur aperiam sapiente, 
    voluptatem tenetur autem eveniet. Veniam odit minus magnam sunt fuga?</p>

<div className="row align-items-center g-4">
<div className="col-12 col-md-4 ">
<div className="card bg-light">

  <div className="card-body text-center ">
    
    {/* <div className="rounded-circle  " style={{height:'100px', width:'100px',borderRadius:'100%'}}>
  
    </div> */}
    <img src={instr}  className=" rounded-circle mb-3  " style={{height:'50%',width:'50%',objectFit:'contain'}} alt="" />
  <p className='p-2 lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt rem odit sequi facilis dolore aut ea fugit numquam corporis, tempore deserunt accusantium at atque quae, autem velit repellat adipisci dolorum!</p>
  <div className="d-flex justify-content-evenly align-items-center ">
  <i className="bi bi-instagram"></i>
  <i className="bi bi-facebook"></i>
  <i className="bi bi-whatsapp"></i>
  <i className="bi bi-envelope"></i>
  </div>
 
  </div>

</div>
</div>
<div className="col-12 col-md-4 ">
<div className="card bg-light">

  <div className="card-body text-center ">
    
    {/* <div className="rounded-circle  " style={{height:'100px', width:'100px',borderRadius:'100%'}}>
  
    </div> */}
    <img src={instr}  className=" rounded-circle mb-3  " style={{height:'50%',width:'50%',objectFit:'contain'}} alt="" />
  <p className='p-2 lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt rem odit sequi facilis dolore aut ea fugit numquam corporis, tempore deserunt accusantium at atque quae, autem velit repellat adipisci dolorum!</p>
  <div className="d-flex justify-content-evenly align-items-center ">
  <i className="bi bi-instagram"></i>
  <i className="bi bi-facebook"></i>
  <i className="bi bi-whatsapp"></i>
  <i className="bi bi-envelope"></i>
  </div>
 
  </div>

</div>
</div>
<div className="col-12 col-md-4 ">
<div className="card bg-light">

  <div className="card-body text-center ">
    
    {/* <div className="rounded-circle  " style={{height:'100px', width:'100px',borderRadius:'100%'}}>
  
    </div> */}
    <img src={instr}  className=" rounded-circle mb-3  " style={{height:'50%',width:'50%',objectFit:'contain'}} alt="" />
  <p className='p-2 lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt rem odit sequi facilis dolore aut ea fugit numquam corporis, tempore deserunt accusantium at atque quae, autem velit repellat adipisci dolorum!</p>
  <div className="d-flex justify-content-evenly align-items-center ">
  <i className="bi bi-instagram"></i>
  <i className="bi bi-facebook"></i>
  <i className="bi bi-whatsapp"></i>
  <i className="bi bi-envelope"></i>
  </div>
 
  </div>

</div>
</div>
</div>
</div>

</section>

<section className='mt-5' >

  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="col-12 col-md-5">
        <h2 className='text-center mb-4'>Contact Info</h2>
        <ul className="list-group list-group-flush lead">
          <li className="list-group-item">
            <span className="fw-bold">Main Location:</span>
            Rwanda Kigali
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Email:</span>
            Rwanda@Kigali
          </li>
          <li className="list-group-item">
            <span className="fw-bold">Email:</span>
            Rwanda@Kigali
          </li>
        </ul>
      </div>

      <div className="col-12 col-md-5">
    <img  className='img-fluid w-75' src="https://developers.google.com/maps/images/landing/webgl.png" alt="" />
      </div>
    </div>
  </div>
</section>
{/* footer */}

<footer className='bg-dark p-5 mt-5'>
  <div className="container text-light d-flex justify-content-between ">
  <p className='text-center lead'>copyright@ 2022 kerie Izere</p>
  <a href="#" className="text-light -absolute bottom-0 end-4">
    <i className="bi bi-arrow-up-square-fill h1"></i>
  </a>
  </div>

</footer>
    </div>
  )
}

export default Home
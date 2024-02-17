import React from 'react'
import iconpic from './../assets/image4.png'
import picture from './../assets/image1.png'
import img from './../assets/image3.png'
const Discover = () => {
  return (
    <div>
      <div className="container-fluid hello mb-5">
      <div className="row">
          <div className="col-md-6 p-5">
             <img src={iconpic} className="mx-5 w-0 img-fluid" alt="" />
           <br></br>
           <br></br>
          <div className='mx-5 mt-4 text-bold'>
          <h1>Discover the </h1>
          <h1><span className='text-danger'>Best</span> Food</h1>
          <h1>and Drinks</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br></br> Nisi animi magni quia sint ratione aliquam .</p>
          <br></br>
          <button className='btn btn-danger text-white rounded-pill mt-1'>Explore Now</button>
          </div>
          </div>
          <div className="col-md-6">
            <div className="parent">
            <img src={picture} className='image1' alt="" />
            <img src={img} className='image2' alt="" />
            <button className='btn btn-danger text-white rounded-pill mt-1 btn1 border border-white'>Get in touch</button>
            </div>
           
          </div>
      </div>
      </div>
    
    </div>
  )
}

export default Discover
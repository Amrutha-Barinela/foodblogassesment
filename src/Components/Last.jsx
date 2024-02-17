import React from 'react'
import iconpic from './../assets/image4.png'
const last = () => {
  return (
    <div>
        <div className="container-fluid mt-2">
            <div className="row bg-light p-4">
                <div className="col-md-3 col-12 my-2">
                  <img src={iconpic} className=" pt-5" alt="" />
                </div>
                <div className="col-md-3 col-12 mx-auto d-block my-2">
                  <h3 className='hello'>Contact Us</h3>
                  <br></br>
                  <p>Lorem ipsum pvt ltd Magalton<br>
                  </br>Road, Parthosh Gate next YTM<br></br>
                   Market, XYZ-343434</p>
                 
                   <p>example2020@gmail.com</p>
                   (904)443-0343
                </div>
                <div className="col-md-3 col-12 mx-auto d-block my-2">
                    <h3 className=' hello'>More</h3>
                    <br></br>
                    <p className=' mb-2'>About US</p>
                    <p></p>
                    <p className=' mb-2'>Products</p>
                    <p></p>
                    <p className=' mb-2'>Career</p>
                    <p></p>
                    <p className=' mb-2'>Contact Us</p>
                </div>
                <div className="col-md-3 col-12 my-2">
                 
                  <h3 className='hello'>Social Links</h3>
                  <br></br>
                  <i class="fa-brands fa-instagram fa-2xl i"></i>
                  <i class="fa-brands fa-twitter fa-2xl mx-5 i"></i>
                  <i class="fa-brands fa-facebook-f fa-2xl i"></i>
                  <br></br>
                  
                  
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p>&copy;2022Food Truck Example</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default last
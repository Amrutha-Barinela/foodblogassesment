import React from 'react'
import aboutpic from "./../assets/image2.png"
const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-light h-25">
          <div className="col-md-6">
              <img src={aboutpic} className='h-100 mx-auto d-block img-fluid' alt=""/>
          </div>
          <div className="col-md-6">
            <div className='p-5'> 
             
                <div className="card-body m-0">
                <h3 className='about1 mt-5'>About Us</h3>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque debitis 
                  harum cupiditate commodi tenetur doloribus nostrum nihil in porro facilis
                   a, laboriosam consectetur dignissimos assumenda? Quisquam quasi minima officiis eligendi.
                   <br></br>
                  <button className='btn btn-danger text-white rounded-pill mt-4'>Read More</button>
                </div></div>
         
          </div>
        </div>
        </div>
  </div>
  )
}

export default About
import React from 'react'
import image2 from './../assets/image6.png';
import image10 from './../assets/image10.png';
import image7 from './../assets/image7.png';
import image5 from './../assets/image5.png';
import image8 from './../assets/image8.png';
import image9 from './../assets/image9.png';
const carou = () => {
  return (
    <div>
        <div oncontextmenu='return false' className='snippet-body'>
            <section class="pt-5 pb-5">
        <div className="container">
        <div className="row">
          <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                 <div className="col-md-4 mb-3">
                                    <div className="card p-2">
                                        <img src={image2} className="m-2" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Grilled Tomatoes at Home</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card p-2">
                                        <img src={image10} className="m-2" alt="" />
                                      <div className="card-body">
                                            <h4 className="card-title">Snacks for Travel</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card p-2">
                                        <img src={image7} className="m-2" alt="" />
                                       <div className="card-body">
                                            <h4 className="card-title">Post-Workout Recipies</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                       <img src={image5} className="m-2" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">How To Grill Corn</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                     </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img src={image8} className="m-2" alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">CrunchWrap Supreme</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img src={image9} className='m-2' alt="" />
                                        <div className="card-body">
                                            <h4 className="card-title">Broccoli Cheese Soup</h4>
                                            <p className="card-text my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nobis, doloremque totam ratione sint soluta.</p>
                                            <button className='btn btn-white rounded-pill mt-2 border border-dark'>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                </div>
            </div>
            <div className="col-6 text-right">
                <a className="btn border border-secondary m-2" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a className="btn border-secondary m-2" href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
       
        </div>
    </div>

</section>
</div>
    </div>
  )
}

export default carou
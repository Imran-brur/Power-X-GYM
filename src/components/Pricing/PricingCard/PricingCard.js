import React from 'react';
import img1 from '../../../Image & Icon/hipcravo-5UbIqV58CW8-unsplash.jpg';
import img2 from '../../../Image & Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg';

const PricingCard = () => {
    return (
        <div style={{ backgroundColor: 'whitesmoke'}}>
            <div className='text-center'>
                <h2><span className="text-warning">CHOOSE THE OFFER</span> THAT SUITS YOU</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consequuntur <br/> necessitatibus quaerat natu.</p>
            </div>
            <div className='row mt-5 ml-5 mr-5'>
                <div className="col-md-4">
                    <div class="card" style={{width: "24rem"}}>
                    <img style={{opacity:'.9'}}   src={img1} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'80px'}}class="card-img-overlay text-white text-center">
                        <h4 class="card-title text-warning">BILLED MONTHLY</h4>
                        <h2 style={{fontSize: '40px'}}>ADVANCE PLAN</h2> 
                        <h1 className='mb-4 text-warning' style={{fontSize: '70px'}}>$140</h1>
                        <h6>✔ Mobile-Optimized</h6>
                        <h6>✔ Best Hosting</h6>                       
                        <h6>✔ Free Custom</h6>
                        <h6>✔ Outstanding</h6>
                        <h6>✔ Happy Customers</h6>
                        <a href="#" class="btn btn-warning btn-lg mt-4"><b>PURCHASE</b></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card" style={{width: "24rem"}}>
                    <img   src={img2} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'80px'}}class="card-img-overlay text-white text-center">
                        <h4 class="card-title text-warning">BILLED MONTHLY</h4>
                        <h2 style={{fontSize: '40px'}}>BASIC PLAN</h2> 
                        <h1 className='mb-4 text-warning' style={{fontSize: '70px'}}>$120</h1>
                        <h6>✔ Mobile-Optimized</h6>
                        <h6>✔ Best Hosting</h6>                       
                        <h6>✔ Free Custom</h6>
                        <h6>✔ Outstanding</h6>
                        <h6>✔ Happy Customers</h6>
                        <a href="#" class="btn btn-warning btn-lg mt-4"><b>PURCHASE</b></a>
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div class="card" style={{width: "24rem"}}>
                    <img style={{opacity:'.9'}}   src={img1} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'80px'}}class="card-img-overlay text-white text-center">
                        <h4 class="card-title text-warning">BILLED MONTHLY</h4>
                        <h2 style={{fontSize: '40px'}}>BEGINNERS</h2> 
                        <h1 className='mb-4 text-warning' style={{fontSize: '70px'}}>$90</h1>
                        <h6>✔ Mobile-Optimized</h6>
                        <h6>✔ Best Hosting</h6>                       
                        <h6>✔ Free Custom</h6>
                        <h6>✔ Outstanding</h6>
                        <h6>✔ Happy Customers</h6>
                        <a href="#" class="btn btn-warning btn-lg mt-4"><b>PURCHASE</b></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
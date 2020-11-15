import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FakeData from '../Sheared/FakeData/FakeData';
import Footer from '../Sheared/Footer/Footer';
import ServiceHeader from './ServisHeader/ServiceHeader';

const Service = () => {
    const { id } = useParams();
    const history = useHistory();
    const selectedService = FakeData.find(data => data.id === id);
    const {title, img} =selectedService;

    const handleClick = () => {
        history.push('/pricing');
    }

    return (
        <div>
            <div className='ClassHeader'>
            <ServiceHeader></ServiceHeader>
            <h1 style={{padding: '150px 0', fontSize: '70px'}} className='text-center text-white' >{title}</h1>
            </div>
                <div className='row ml-5'>
                    <div className="col-md-6">
                        <img style={{width: '744px', height: '490px'}} src={img} alt=""/>
                    </div>
                    <div className="col-md-5 ml-2">
                        <h1>CLASS SCHEDULE</h1>
                        <div className='row'>
                        <div className="col-md-2.5 ml-3">
                            <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Monday</h4>
                                    <h6 style={{color: 'orangered'}}>8:00 AM - 9.00 PM</h6>
                            </div>
                            <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Wednesday</h4>
                                    <h6 style={{color: 'orangered'}}>10:00 AM - 11.00 AM</h6>
                            </div>
                            <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Friday</h4>
                                    <h6 style={{color: 'orangered'}}>11:00 AM - 12.00 PM</h6>
                            </div>
                        </div>
                        <div className="col-md-2.5 ml-3">
                        <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Tuesday</h4>
                                    <h6 style={{color: 'orangered'}}>10:00 AM - 11.00 AM</h6>
                            </div>
                            <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Thursday</h4>
                                    <h6 style={{color: 'orangered'}}>5:00 PM - 6.00 PM</h6>
                            </div>
                            <div class="card mb-3" style={{width: '18rem', height: '6rem'}}>
                                    <h4 class="card-title">Saturday</h4>
                                    <h6 style={{color: 'orangered'}}>7:00 PM - 9.00 PM</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                    <div className="col-md-6 ml-5">
                    <p className='text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita voluptatum omnis porro impedit unde quisquam veniam esse perspiciatis fugit veritatis nobis cumque sapiente optio eum quis quibusdam, perferendis ad cupiditate, atque quia sunt vitae odit? Perferendis sint suscipit odio aspernatur, vero maiores molestiae at asperiores dicta ad labore, expedita iste nobis magni quisquam corporis repudiandae perspiciatis explicabo ducimus qui culpa non! Vel porro dolore recusandae, error soluta sunt doloribus consequuntur repudiandae facilis unde aliquid necessitatibus tenetur eius aut eveniet veniam eum, hic nemo officia mollitia iure, quidem sit excepturi sapiente. At, dolorum modi similique maxime sed illum fugit atque eligendi?</p>
                    </div>           
                <div className="row">
                    <div className="col-md-6 ml-5">
                        <h6>✔ Having Similar Shapely Thighs</h6>
                        <h6>✔ Getting Stronger Body</h6>
                        <h6>✔ Increased Metabolism</h6>
                        <h6>✔ Increase Muscular Endurance</h6>
                        <h6>✔ Maximum Result in Less Time</h6>
                        <h6>✔ Firm Hips and Tummy </h6>
                    </div>
                    <div className="col-md-5 d-flex align-items-end ">
                        <button onClick={handleClick} className='btn btn-warning btn-lg w-50 ml-auto p-2 bd-highlight'>JOIN US</button>
                    </div>
                </div>

            <Footer></Footer>
        </div>
    );
};

export default Service;
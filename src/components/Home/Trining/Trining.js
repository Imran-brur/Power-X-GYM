import React from 'react';
import img1 from '../../../Image & Icon/bruce-mars-gJtDg6WfMlQ-unsplash.png';
import img2 from '../../../Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';

const Trining = () => {

    return (
       <div>
            <h1 className='text-center'>TRAINING <span className="text-warning">PROGRAMS</span></h1>
            <div className='row mt-5 ml-5 mr-5'>
            <div className="col-md-6">
                <img style={{ height: '510px', width: '100%'}} src={img1} alt=""/>
                <div className='card-img-overlay d-flex align-items-end'>
                    <h3 className='mt-5  pt-3 pl-3 pr-3' style={{backgroundColor: '#ffc107', height: '70px', borderRadius:'5px'}}>YOGA TRAINING SESSION ➜</h3>
                </div>
            </div>
            <div className="col-md-6">
                <img className="img-fluid" src={img2} alt=""/>
                <div className='card-img-overlay d-flex align-items-end'>
                    <h3 className='mt-5  pt-3 pl-3 pr-3' style={{backgroundColor: '#ffc107', height: '70px', borderRadius:'5px'}}>CARDIO TRAINING SESSION ➜</h3>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Trining;


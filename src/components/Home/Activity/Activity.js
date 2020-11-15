import React from 'react';
import img1 from '../../../Image & Icon/Group 87.png';
import img2 from '../../../Image & Icon/Group 88.png';
import img3 from '../../../Image & Icon/gift-2.png';
import './Activity.css';

const Activity = () => {
    return (
        <div>
            <h1 className='text-center mt-5'><span className='text-warning'>WHY</span> CHOOSE US</h1>
            <div class="row  p-3 mt-5 ml-5 mr-5">
            <div class="card1 col mb-4 p-3 ml-5">
            <div style={{marginTop:'100px'}} class="text-center">
                    <img className="mb-5" src={img1} alt=""/>
                    <h2>FREE FITNESS TRAINING</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis et aliquid veniam consequatur vel minus aliquam nihil. Error aspernatur consequuntur nobis in accusantium tenetur neque.</p>
                </div>
            </div>
            <div class="card1 col mb-4 p-3">
            <div style={{marginTop:'100px'}} class="text-center">
                    <img className="mb-5" src={img2} alt=""/>
                    <h2>TONS OF CARDIO & STRENGTH</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis et aliquid veniam consequatur vel minus aliquam nihil. Error aspernatur consequuntur nobis in accusantium tenetur neque.</p>
                </div>
            </div>
            <div class="card1 col mb-4 p-3">
                <div style={{marginTop:'130px'}} class="text-center">
                    <img className="mb-5" src={img3} alt=""/>
                    <h2>NO COMMITMENT MEMBERSHIPS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis et aliquid veniam consequatur vel minus aliquam nihil. Error aspernatur consequuntur nobis in accusantium tenetur neque.</p>
                </div>
            </div>
        </div>
    </div>    
    );
};

export default Activity;
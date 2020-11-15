import React from 'react';
import img1 from '../../../Image & Icon/hipcravo-5UbIqV58CW8-unsplash.jpg';
import img2 from '../../../Image & Icon/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import img3 from '../../../Image & Icon/penguinuhh-8VI6WwEEEHw-unsplash.jpg';
import img4 from '../../../Image & Icon/Group 80.png';
import img5 from '../../../Image & Icon/Group 81.png';
import img6 from '../../../Image & Icon/Group 82.png';

const Progress = () => {
    return (
        <div style={{marginBottom:'120px'}} className="about row ml-5 mr-5">
            <div className="col-md-4">
                <div class="card bg-dark text-white" style={{height:'23.5rem'}}>
                    <img style={{height:'100%', width:'100%', opacity:'0.7'}} src={img1} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'100px'}} class="card-img-overlay text-center">
                        <img className="mb-5" src={img4} alt=""/>
                        <h2>PROGRESSION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis et aliquid veniam consequatur vel minus aliquam nihil. Error aspernatur consequuntur nobis in accusantium tenetur neque.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card bg-dark text-white" style={{height:'23.5rem'}}>
                    <img style={{opacity:'0.7'}} src={img2} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'120px'}} class="card-img-overlay text-center">
                        <img className="mb-5"  src={img5} alt=""/>
                        <h2 className='text-warning'>WORKOUT</h2>
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam incidunt obcaecati expedita esse, eaque at consequuntur veritatis hic asperiores, optio aperiam, dolorem qui provident.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div class="card bg-dark text-white" style={{height:'23.5rem'}} >
                    <img style={{height:'100%', width:'100%', opacity:'0.7'}} src={img3} class="card-img-top" alt="..."/>
                    <div style={{marginTop:'100px'}} class="card-img-overlay text-center">
                        <img className="mb-5" src={img6} alt=""/>
                        <h2>NUTRITION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam iusto, voluptatibus laborum sed tempore dolor optio esse consectetur aut, quae ex ipsum saepe libero?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Progress;
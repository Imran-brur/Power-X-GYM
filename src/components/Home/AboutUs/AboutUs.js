import React from 'react';
import img from '../../../Image & Icon/wells-chan-H-vAxuWxmi8-unsplash.jpg';

const AboutUs = () => {
    return (
        <div style={{marginBottom:'70px'}} className="row mt-5 ml-5 mr-5">
            <div className="col-md-6">
                <img style={{width: '90%', height: '700px'}} className="img-fluid" src={img} alt=""/>
            </div>
            <div className="col-md-6 mt-5">
                <h1 className="text-secondary">ABOUT US</h1>
                <h2 className='text-warning'>WE ARE HERE TO DREAM!</h2>
                <h1>OUR TEAM IS HERE TO SURVIVE YOU</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto in aut corrupti suscipit doloremque cumque! Minus, voluptas. Enim libero ullam autem corrupti iure vel non aut? Quo provident exercitationem nesciunt nam cum officiis, mollitia, ea culpa tempora voluptates sed ab tempore deserunt temporibus obcaecati natus dignissimos est amet magnam?</p>
            </div>
        </div>
    );
};

export default AboutUs;
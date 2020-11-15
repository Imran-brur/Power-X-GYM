import React from 'react';
import youtube from '../../../Image & Icon/bxl-youtube.png';
import facebook from '../../../Image & Icon/bxl-facebook.png';
import instagram from '../../../Image & Icon/bxl-instagram.png';
import twitter from '../../../Image & Icon/bxl-twitter.png';
import whatsapp from '../../../Image & Icon/bxl-whatsapp.png';

const Footer = () => {
    return (
        <div style={{backgroundColor: 'black'}}  className='mt-5 mb -5 text-white'>
            <div className='row'>
            <div className='col-md-3 mt-5 text-center'>
            <h2>POWER <span style={{color: 'orangered'}}>X</span></h2>
            </div>
            <div className='col-md-2 mt-5'>
                <h6>Need Help?</h6>
                <p>Help Center</p>
                <p>Email Support</p>
                <p>Live Chat</p>
                <p>Gift Certificates</p>
                <p>Send us Feedback</p>
            </div>
            <div className='col-md-2 mt-5'>
                <h6>Digital Resources</h6>
                <p>Articles</p>
                <p>E-books</p>
            </div>
            <div className='col-md-2 mt-5'>
                <h6>Contact with Us</h6>
                <img className='m-2' src={youtube} alt=""/>
                <img className='m-2' src={facebook} alt=""/>
                <img className='m-2' src={instagram} alt=""/>
                <img className='m-2' src={twitter} alt=""/>
                <img className='m-2' src={whatsapp} alt=""/>
                <p>Forum</p>
            </div>
            <div className='col-md-3 mt-5'>
            <h5>Join Our Newsletter</h5>
            <br/>
            <h6>Get exclusive news, features and updates form The Shredder Weight Loss Academy</h6>
            </div>
        </div> <br/>
        <h6 className="text-center text-secondary">© 2020 IMRAN KHAN. All Rights Reserved.</h6>
        </div>
    );
};

export default Footer;
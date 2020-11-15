import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <h2 className='text-white'>POWER <span style={{color: 'orangered'}}>X</span></h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <Link className="nav-link text-white mr-5" to="/home">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/services">Service</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/OurClasses">Our Classes</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/aboutUs">About us</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/blog">Blog</Link>
                    </li> 
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/pricing">Pricing</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-white mr-5" to="/ContactUs">Contact Us</Link>
                    </li>
                    </ul>
                </div>
                </nav>
        </div>
    );
};

export default Navbar;
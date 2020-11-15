import React from 'react';
import Navbar from '../../Sheared/Navbar/Navbar';

const ClassHeader = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style={{padding: '150px 0', fontSize: '70px'}} className='text-center text-white' >OUR CLASSES</h1>
        </div>
    );
};

export default ClassHeader;
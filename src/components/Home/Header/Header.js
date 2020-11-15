import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Sheared/Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-white">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;
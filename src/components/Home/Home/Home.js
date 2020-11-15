import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Activity from '../Activity/Activity';
import Footer from '../../Sheared/Footer/Footer';
import Header from '../Header/Header';
import Progress from '../Progress/Progress';
import Trining from '../Trining/Trining';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Progress></Progress>
            <AboutUs></AboutUs>
            <Trining></Trining>
            <Activity></Activity>
            <Footer></Footer>
        </div>
    );
};

export default Home;
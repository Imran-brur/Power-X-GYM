import React from 'react';
import Footer from '../Sheared/Footer/Footer';
import PricingCard from './PricingCard/PricingCard';
import PricingHeader from './PricingHeader/PricingHeader';

const Pricing = () => {
    return (
        <div>
        <div className='ClassHeader'>
            <PricingHeader></PricingHeader>
            <h1 style={{padding: '150px 0', fontSize: '70px'}} className='text-center text-white' >PRICING PLANS</h1>
        </div>
            <PricingCard></PricingCard>
            <Footer></Footer>
        </div>
    );
};

export default Pricing;
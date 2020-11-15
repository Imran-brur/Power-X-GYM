import React from 'react';
import Footer from '../../Sheared/Footer/Footer';
import Category from '../Category/Category';
import ClassHeader from '../ClassHeader/ClassHeader';
import './Classes.css'

const Classes = () => {
    return (
       <div>
            <div className='ClassHeader'>
            <ClassHeader></ClassHeader>
        </div>
        <Category></Category>
        <Footer></Footer>
       </div>
    );
};

export default Classes;
import React from 'react';
import FakeData from '../../Sheared/FakeData/FakeData';
import CategoryPart from '../CategoryPart/CategoryPart';

const Category = () => {
    return (
        <div className="row ml-5 mr-5">
            {
                FakeData.map(data => <CategoryPart data={data}></CategoryPart>)
            }
        </div>
    );
};

export default Category;
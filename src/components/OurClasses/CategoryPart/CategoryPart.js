import React from 'react';
import { useHistory } from 'react-router-dom';

const CategoryPart = ( {data} ) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/service/${data.id}`)
    }

    return (
        <div onClick={handleClick} className="col-md-4 p-3">
            <div class="card bg-dark text-white" style={{height:'23.5rem'}}>
                <img style={{height:'100%', width:'100%'}} src={data.img} class="card-img-top" alt="..."/>
                <div style={{marginTop:'260px'}} class="card-img-overlay text-center">
                <h3 className='text-dark mt-5  pt-3 pl-3 pr-3' style={{backgroundColor: '#ffc107', height: '70px', borderRadius:'5px'}}>{data.title} ➜</h3>
                </div>
            </div>
        </div>
    );
};

export default CategoryPart;
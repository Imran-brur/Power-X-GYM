import React from 'react';
import carousel1 from '../../../Image & Icon/alora-griffiths-TuzrzArccvc-unsplash.jpg';
import carousel2 from '../../../Image & Icon/arthur-edelman-qfjuh4OLdxw-unsplash.jpg';
import carousel3 from '../../../Image & Icon/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg';

const HeaderMain = () => {
    return (
        <div className='d-flex mt-5'>
            <div className="col-md-6 align-self-center">
                <h1>THE BEST FITNESS <br/> STUDIO IN THE WORLD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas consectetur tempora minus assumenda non ipsum doloribus exercitationem vitae error! Quia illo fugit quas perspiciatis asperiores beatae quos! Ipsa natus tempora molestias reiciendis, nulla cupiditate perferendis earum porro voluptatem quo culpa distinctio nemo ullam obcaecati, deserunt ratione recusandae magnam quasi optio omnis id repudiandae? Impedit magni maiores hic reiciendis repellendus!</p>
                <button className="btn btn-warning"><b>JOIN US</b></button>
            </div>
            {/* <div className="col-md-6">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={carousel1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={carousel3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
            </div> */}
        </div>
    );
};

export default HeaderMain;
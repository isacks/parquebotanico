import React from 'react';
import Orquidea from '../assets/img/orquidea.jpg';
import Orquidea2 from '../assets/img/orquidea2.jpg';
import Orquidea3 from '../assets/img/orquidea3.jpg';
import Orquidea4 from '../assets/img/orquidea4.jpg';
import Orquidea5 from '../assets/img/orquidea5.jpg';

function SliderComponent() {
    return (
        <div>
            <div id="carouselOrquideas" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselOrquideas" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselOrquideas" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselOrquideas" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselOrquideas" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselOrquideas" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div className="carousel-item active text-center">
                        <img src={Orquidea} className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item text-center">
                        <img src={Orquidea2} className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item text-center">
                        <img src={Orquidea3} className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item text-center">
                        <img src={Orquidea4} className="img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item text-center">
                        <img src={Orquidea5} className="img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselOrquideas" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselOrquideas" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SliderComponent

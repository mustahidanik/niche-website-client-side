import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from "../../../images/image1.jpg"
import slide2 from "../../../images/image2.jpg"
import slide3 from "../../../images/image3.jpg"

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
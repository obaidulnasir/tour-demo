import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "./img-1.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/TKJqmKW/b1.jpg"
                        height="440px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/z2j4ySM/b2.jpg"
                        height="440px"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pnQYZ4W/7.jpg"
                        height="440px"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
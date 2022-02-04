import React from 'react';
import kaaba from "./kaaba.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${kaaba}` }} className="banner-images d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <h2 className=" text-info fw-bolder ">UMRAH PACKAGES</h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
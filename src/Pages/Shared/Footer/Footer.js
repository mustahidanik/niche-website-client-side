import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <div className=" pt-2 footer-container">

                <div className="row w-75 p-3 mx-auto footer-detaill">
                    <div className=" pt-3 ps-3 pe-3  col-lg-5 col-md-5 col-12 col-sm-12">
                        <h3 className=""><span>CAR-RENTALS</span></h3>
                        <p><small className="visits"> Travel outside a person's local area for leisure was largely confined to wealthy classes, who at times travelled to distant parts of the world, to see great buildings and works of art, learn new languages, experience new cultures, enjoy pristine nature and to taste different cuisines.</small></p>

                    </div>
                    <div className="  p-3 col-lg-7 col-md-7 col-12 col-sm-12">
                        <h3>CORPORATE OFFICE</h3>
                        <h5> <span>CAR-RENTALS</span></h5>
                        <p>House- 1 & 3 , Road-2, Block-B, UTTARA-10, Dhaka-1216</p>
                        <p>Hotline : 02-9013802, 02-9013804, 01900445812, 01900445811.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
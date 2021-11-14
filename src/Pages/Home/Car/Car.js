import React from 'react';
import "./Car.css";
import { Link } from 'react-router-dom';

const Car = ({ car }) => {
    const { name, img, description, price, _id } = car;
    return (
        <div className="col">
            <div className="card cart-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="p-2">
                    <h2>Model : {name}</h2>
                    <p>{description}</p>
                    <h4>Price : {price}</h4>
                    <Link to={`/buynow/${_id}`}><button className="btn btn-primary">Buy NOW</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Car;
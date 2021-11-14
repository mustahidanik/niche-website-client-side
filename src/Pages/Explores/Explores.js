import React from 'react';
import "./Explores.css";
import { Link } from 'react-router-dom';

const Explores = ({ explores }) => {
    const { name, img, description, price, _id } = explores;


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
                    <Link to={`/buynow/${_id}`}><button className="btn btn-primary">Buy Now</button></Link>
                </div>

            </div>
        </div>
    );
};

export default Explores;
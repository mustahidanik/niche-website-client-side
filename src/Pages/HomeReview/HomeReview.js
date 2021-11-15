import React from 'react';
import "./HomeReview.css";

const HomeReview = ({ homeReview }) => {
    const { email, review, _id } = homeReview;
    return (
        <div className="col">
            <div className="card review-container">

                <div className="p-2">
                    <h5>Email : {email}</h5>
                    <p>{review}</p>


                </div>

            </div>
        </div>
    );
};

export default HomeReview;
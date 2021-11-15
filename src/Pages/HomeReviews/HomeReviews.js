import React, { useEffect, useState } from 'react';
import HomeReview from '../HomeReview/HomeReview';


const HomeReviews = () => {
    const [homeReviews, sethomeReviews] = useState([])
    useEffect(() => {
        fetch("https://morning-dusk-61811.herokuapp.com/review")
            .then(res => res.json())
            .then(data => sethomeReviews(data));
    }, [])
    return (
        <div className=" py-5">
            <h2><span> Reviews!!!</span></h2>
            <div className="">
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services ">
                    {

                        homeReviews.map(homeReview => <HomeReview
                            key={homeReview.id}
                            homeReview={homeReview}
                        ></HomeReview>)
                    }

                </div>
            </div>
        </div>
    );
};

export default HomeReviews;
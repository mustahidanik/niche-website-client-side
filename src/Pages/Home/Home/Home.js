import React from 'react';
import HomeReviews from '../../HomeReviews/HomeReviews';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import NewAddition from '../NewAddition/NewAddition';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Cars></Cars>
            <NewAddition></NewAddition>
            <HomeReviews></HomeReviews>

        </div>
    );
};

export default Home;
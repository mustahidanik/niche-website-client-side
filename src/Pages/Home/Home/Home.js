import React from 'react';
import Banner from '../Banner/Banner';
import Cars from '../Cars/Cars';
import NewAddition from '../NewAddition/NewAddition';


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Cars></Cars>
            <NewAddition></NewAddition>


        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Explores from '../Explores/Explores';

const Explore = () => {
    const [explore, setexplore] = useState([])
    useEffect(() => {
        fetch("https://morning-dusk-61811.herokuapp.com/cars")
            .then(res => res.json())
            .then(data => setexplore(data));
    }, [])
    return (
        <div id='cars' className=" py-5">
            <h2>Explore Our New<span> Cars!!!</span></h2>
            <div className="">
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services ">
                    {

                        explore.map(explores => <Explores
                            key={explores.id}
                            explores={explores}
                        ></Explores>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Explore;
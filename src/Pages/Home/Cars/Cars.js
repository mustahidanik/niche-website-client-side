import React, { useEffect, useState } from 'react';
import './Cars.css';
import Car from '../Car/Car';

const Cars = () => {
    const [cars, setcars] = useState([])
    const limitIs = 6
    useEffect(() => {
        fetch(`https://morning-dusk-61811.herokuapp.com/cars?limit=6`)
            .then(res => res.json())
            .then(data => setcars(data));
    }, [])

    // let items = [];
    // for (const car of cars) {
    //     if (items.length < 6) {

    //         items.push(car);
    //     }
    // }
    return (
        <div id='cars' className=" py-5">
            <h2>Choose Your Favourite<span> Cars!!!</span></h2>
            <div className="">
                <div className="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 services ">
                    {

                        cars.map(car => <Car
                            key={car.id}
                            car={car}
                        ></Car>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Cars;
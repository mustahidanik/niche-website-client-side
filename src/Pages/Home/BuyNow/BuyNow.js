import React, { useEffect, useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router';

const BuyNow = () => {
    const [singleCar, setSingleCar] = useState([])
    const getId = useParams()

    const { user } = useAuth();
    const loginUser = { name: user.displayName, email: user.email }

    const [loginData, setLoginData] = useState(loginUser)
    console.log(getId.id);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    useEffect(() => {
        fetch(`https://morning-dusk-61811.herokuapp.com/singleCar?id=${getId.id}`)
            .then(res => res.json())
            .then(data => {
                setSingleCar(data)
            });
    }, [])

    const loginSubmit = e => {
        const date = new Date()

        const orderDetails = {
            ...loginData,
            carName: singleCar.name,
            carPrice: singleCar.price,
            date: date.toLocaleDateString()
        }
        console.log("details", orderDetails);
        fetch("https://morning-dusk-61811.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        e.preventDefault();
    }


    return (
        <div>
            <h2> Please Fill the Form</h2>
            <form onSubmit={loginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your name"
                    defaultValue={user.displayName}
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    defaultValue={user.email}
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Address"
                    type="text"
                    name="address"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Phone Number"
                    type="number"
                    name="phone number"
                    onChange={handleOnChange}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 1, bgcolor: 'info.main', color: 'white' }} type="submit" variant="contained">Purchase</Button>
            </form>
        </div>
    );
};

export default BuyNow;
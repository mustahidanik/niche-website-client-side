import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import "./MyOrders.css";

const MyOrders = ({ myOrders, handleDeleteOrder }) => {
    const { carName, carPrice, email, _id } = myOrders;
    console.log(myOrders);
    return (

        <div className="col">
            <div className="card order-container">
                <div className="p-2">
                    <h2>Model : {carName}</h2>
                    <h4>Price : {carPrice}</h4>
                    <p>Email : {email}</p>
                    <Box sx={{ my: "auto" }}><Button onClick={() => handleDeleteOrder(_id)}>Delete</Button></Box>

                </div>

            </div>
        </div>

    );
};

export default MyOrders;
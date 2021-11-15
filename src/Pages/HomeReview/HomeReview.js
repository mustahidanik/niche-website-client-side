import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./HomeReview.css";

const HomeReview = ({ homeReview }) => {
    const { email, review, value } = homeReview;
    return (
        <div className="col">
            <div className="card review-container">

                <div className="p-2">
                    <h5>Email : {email}</h5>
                    <p>{review}</p>

                    <Box
                        sx={{
                            '& > legend': { mt: 2 },
                        }}
                    >

                        <Typography component="legend">Read only</Typography>
                        <Rating name="read-only" value={value} readOnly />

                    </Box>



                </div>

            </div>
        </div>
    );
};

export default HomeReview;
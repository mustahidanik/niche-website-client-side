import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';





const Reviews = () => {
    const [review, setReview] = useState("")
    const [value, setValue] = React.useState(2);


    const { user } = useAuth()
    const handleOnBlur = e => {
        setReview(e.target.value)
    }
    const handleSubmit = (e) => {
        const newReview = { name: user.displayName, email: user.email, review, value }
        console.log(newReview);
        fetch('https://morning-dusk-61811.herokuapp.com/review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Add a Review</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="review"
                    onBlur={handleOnBlur} />
                <br />
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                    }}
                >
                    <Typography component="legend">put your rating</Typography>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />

                </Box>
                <input type="submit" />
            </form>
        </div>
    );
};

export default Reviews;
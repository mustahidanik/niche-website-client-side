import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const [review, setReview] = useState("")
    const { user } = useAuth()
    const handleOnBlur = e => {
        setReview(e.target.value)
    }
    const handleSubmit = (e) => {
        const newReview = { name: user.displayName, email: user.email, review }
        console.log(newReview);
        fetch('http://localhost:5000/review', {
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
                <input type="submit" />
            </form>
        </div>
    );
};

export default Reviews;
import React, { useState } from 'react';

const Admin = () => {
    const [email, setEmail] = useState("")
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        const user = { email }
        fetch('https://morning-dusk-61811.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Create Admin</h1>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="email"
                    onBlur={handleOnBlur}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Admin;
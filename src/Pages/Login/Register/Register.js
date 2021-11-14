import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { registerUser, isLoading } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const loginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password is not matched');
            return
        }
        registerUser(loginData.email, loginData.password, history);
        e.preventDefault();
    }
    return (
        <Container sx={{ mt: 8, mb: 5 }}>
            <Typography varient="body1" gutterBottom>Register</Typography>
            {!isLoading && <form onSubmit={loginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Re-Type Your Password"
                    type="password"
                    name="password2"
                    onChange={handleOnChange}
                    variant="standard" />

                <Button sx={{ width: '75%', m: 1, bgcolor: 'info.main', color: 'white' }} type="submit" variant="contained">Register</Button>

                <NavLink
                    style={{ textDecoration: "none" }}
                    to="/login">
                    <Button variant="text">Already Registered? Please Login</Button>
                </NavLink>
            </form>}
            {isLoading && <CircularProgress />}
        </Container >
    );
};

export default Register;
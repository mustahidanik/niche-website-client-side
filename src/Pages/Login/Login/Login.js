import { Container, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { googleLogin, loginUser } = useAuth()
    const location = useLocation()
    const redirect = location?.state?.from || "/"
    const history = useHistory()
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    const loginSubmit = e => {
        loginUser(loginData.email, loginData.password, redirect, history)
        e.preventDefault();
    }
    const handleGoogleLogin = () => {
        googleLogin(location, history)
    }
    return (
        <Container sx={{ mt: 8, mb: 5 }}>
            <Typography varient="body1" gutterBottom>Login</Typography>
            <form onSubmit={loginSubmit}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
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

                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                <Button onClick={handleGoogleLogin} sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login With Google</Button>
                <br />

                <NavLink
                    style={{ textDecoration: "none" }}
                    to="/register">
                    <Button variant="text">New User? Please Register</Button>
                </NavLink>
            </form>


        </Container >
    );
};

export default Login;
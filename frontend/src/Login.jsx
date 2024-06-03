import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";
import M from 'materialize-css';
import "./App.css";

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { setLoggedUser } = useContext(UserContext);

    const onSubmit = async (credentials) => {
        try {
            const response = await axios.post('http://localhost:4000/login', credentials);
            const loginResp = response.data;
            sessionStorage.setItem('loginResp', loginResp.jwt);

            if (loginResp.user) {
                setLoggedUser(loginResp.user);
                navigate('/'); // Redirect to home or another page
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
            M.toast({ html: '<div>' + error.response.data.error + '</div>', classes: 'error', displayLength: 12000 });
        }
    };

    return (
        <div className="form-container visible">
            <p className="title">Login</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Email<span className="mandatory">*</span></label>
                    <input type="email" {...register("email", { required: true })} placeholder="Enter your email" />
                    {errors.email && <span className="error-message">Email is mandatory!</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password<span className="mandatory">*</span></label>
                    <input type="password" {...register("password", { required: true })} placeholder="Enter your password" />
                    {errors.password && <span className="error-message">Password is mandatory!</span>}
                </div>
                
                <input type="submit" value="Login" />

                
            </form>

            <p className="login-text">Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
}

export default Login;

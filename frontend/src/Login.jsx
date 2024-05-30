import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <p className="title">Login</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>*Email* is mandatory!</span>}

                <input type="password" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span>*Password* is mandatory!</span>}

                <input type="submit"value="Login"/>
            </form>

            <p className="login-text">Don't have an account? <a href="/register">Register here</a></p>
        </>
    );
}

export default Login;

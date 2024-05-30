import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
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
        <div className="form-container visible">
            <p className="title">Login</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email<span className="mandatory">*</span></label>
                <input type="email" {...register("email", { required: true })} placeholder="Email" />
                {errors.email && <span>*Email* is mandatory!</span>}
                {errors.email && <div className="empty-row"></div>} {/* Empty row after email error message */}

                <label htmlFor="password">Password<span className="mandatory">*</span></label>
                <input type="password" {...register("password", { required: true })} placeholder="Password" />
                {errors.password && <span>*Password* is mandatory!</span>}
                {errors.email && <div className="empty-row"></div>} {/* Empty row after email error message */}

                <input type="submit"value="Login"/>
            </form>

            <p className="login-text">Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
}

export default Login;

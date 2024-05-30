import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Register() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <p className="title">Register</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name<span className="mandatory">*</span></label>
                    <input type="text" {...register("firstName", {required: true})} placeholder="Enter your first name" />
                    {errors.firstName && <span className="error-message">First name is mandatory!</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="lastName">Last Name<span className="mandatory">*</span></label>
                    <input type="text" {...register("lastName", {required: true})} placeholder="Enter your last name" />
                    {errors.lastName && <span className="error-message">Last name is mandatory!</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email<span className="mandatory">*</span></label>
                    <input type="email" {...register("email", {required: true})} placeholder="Enter your email" />
                    {errors.email && <span className="error-message">Email is mandatory!</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password<span className="mandatory">*</span></label>
                    <input type="password" {...register("password", {required: true})} placeholder="Enter your password" />
                    {errors.password && <span className="error-message">Password is mandatory!</span>}
                </div>
                
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" {...register("country")} placeholder="Enter your country" />
                </div>
                
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select {...register("gender")}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input type="date" {...register("dob")} placeholder="Enter your date of birth" />
                </div>
                
                <input type="submit" value="Register" />
            </form>

            <p className="login-text">Already have an account? <a href="/login">Login here</a></p>
        </>
    );
}

export default Register;

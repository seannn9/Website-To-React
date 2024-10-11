import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../styles/login.css";

const Login = () => {
    return (
        <div className="login-container">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <div className="login">
                    <Link className="active" to="/login">
                        Login
                    </Link>
                    <Link to="/register">Register</Link>
                </div>
            </div>

            <div className="form_container">
                <form className="login_form" id="login_form">
                    <fieldset className="login_fieldset">
                        <legend className="signin">Log In</legend>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="login_email"
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="login_password"
                            required
                        />
                    </fieldset>
                    <button type="submit" className="login_button">
                        Log-In
                    </button>
                    <div className="signup_link">
                        <p>
                            Don't have an account yet?
                            <Link to="/register">Sign Up</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

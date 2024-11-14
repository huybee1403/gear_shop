import React from "react";
import "./Login.css";
import { Container } from "react-bootstrap";
import { useUser } from "../../../UserContext/UserContext";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Login = () => {
    const { handleLogin } = useUser();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
    });
    return (
        <Container className="login">
            <div className="top">
                <h1>Login</h1>
                <p>Home - Login</p>
            </div>
            <form action="" className="login-form" onSubmit={(e) => handleLogin(e, formik.values)}>
                <div className="to-register">
                    <p className="m-0">Don’t have an account?</p>
                    <Link to="/register">
                        <p className="signup">SignUp</p>
                    </Link>
                </div>
                <h3>Get Started</h3>
                <label htmlFor="username">Username Or Your Email</label>
                <input type="text" name="email" placeholder="Username Or Your Email" onChange={formik.handleChange} />
                <label htmlFor="password">Your Password</label>
                <input type="text" placeholder="Password" name="password" onChange={formik.handleChange} />
                <div className="remember">
                    <div className="check">
                        <input type="checkbox" />
                        <p>Remember Me</p>
                    </div>
                    <div className="forgot">
                        <p>Forgot passwork ?</p>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
        </Container>
    );
};

export default Login;

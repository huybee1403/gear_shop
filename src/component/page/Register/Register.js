import React, { useRef } from "react"
import { Container } from "react-bootstrap"
import "./Register.css"
import { useFormik } from "formik"
import axios from "axios"
import { toast } from "react-toastify"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import { useUser } from "../../../UserContext/UserContext"

const Register = () => {
    const { userData } = useUser()
    const navigate = useNavigate()

    const handleSignIn = async (data) => {
        if (userData) {
            const checkUser = userData.find((item) => item.email === data.email)

            if (checkUser) {
                toast.error("Username Already Exists")
            } else {
                try {
                    const reponse = await axios.post("https://6717cc55b910c6a6e02a08be.mockapi.io/user", data)
                    toast.success("Sign Up Successfully")
                    navigate("/login")
                    window.location.reload()
                } catch (error) {
                    toast.error(error)
                }
            }
        }
    }

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            rePass: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Your Name Is Empty"),
            email: Yup.string().email("Email Is Not Vaild").required("Your Email Is Empty"),
            password: Yup.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự").required("Password Is Empty"),
            rePass: Yup.string()
                .oneOf([Yup.ref("password"), null], "Confirmation password does not match")
                .required("Password confirmation is required"),
        }),
        onSubmit: async (values) => {
            handleSignIn(values)
        },
    })

    return (
        <Container className="register">
            <div className="top">
                <h1>Register</h1>
                <p>Home - Register</p>
            </div>
            <form action="" className="form-regis" onSubmit={formik.handleSubmit}>
                <div className="to-login">
                    <p className="m-0">Do you have an account?</p>
                    <Link to="/login">
                        <p className="signin m-0">Signin</p>
                    </Link>
                </div>
                <h3>Get Started</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Your Username" name="username" value={formik.values.username} onChange={formik.handleChange} />
                {formik.touched.username && formik.errors.username ? <div className="error">{formik.errors.username}</div> : null}

                <label htmlFor="email">Email</label>
                <input type="text" placeholder="Your Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

                <label htmlFor="password">Password</label>
                <input type="text" placeholder="Your Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

                <label htmlFor="re-pass">Re-Password</label>
                <input type="text" placeholder="Your Re-Password" name="rePass" value={formik.values.rePass} onChange={formik.handleChange} />
                {formik.touched.rePass && formik.errors.rePass ? <div className="error">{formik.errors.rePass}</div> : null}

                <button type="submit">Sign Up</button>
            </form>
        </Container>
    )
}

export default Register

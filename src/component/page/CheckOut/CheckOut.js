import React, { useState } from "react"
import "./CheckOut.css"
import { Col, Container, Row } from "react-bootstrap"
import { UseProduct } from "../../../ProductContext/ProductContext"

const CheckOut = () => {
    const [checkAtm, setCheckAtm] = useState(false)
    const { Product } = UseProduct()
    const [values, setValues] = useState({
        emails: "",
        fullname: "",
        phone: "",
        address: "",
        city: "",
    })

    const [errs, setErrs] = useState({
        emailsErr: "",
        fullnameErr: "",
        phoneErr: "",
        addressErr: "",
        cityErr: "",
    })

    console.log(errs)
    console.log(values)

    const handelInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handelSubmit = (e) => {
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        e.preventDefault()

        const newErr = { ...errs }
        if (!values.emails) {
            newErr.emailsErr = "Email Is Empty !!!"
        } else {
            newErr.emailsErr = regexEmail.test(values.emails) ? "" : "Your Email Is Not Valid"
        }
        newErr.fullnameErr = !values.fullname ? "Full Name Is Empty !!!" : ""
        newErr.phoneErr = !values.phone ? "Phone Number Is Empty !!!" : ""
        newErr.addressErr = !values.address ? "Address Is Empty !!!" : ""
        newErr.cityErr = !values.city ? "City Is Empty !!!" : ""
        setErrs(newErr)
    }

    const total = Product.reduce((total, item) => {
        const itemTotal = item.sale_check ? (item.price - (item.price * item.sale_value) / 100) * item.quantity : item.price * item.quantity
        return total + itemTotal
    }, 0)

    const totalDiscount = total > 900.0 ? total - total * 0.2 : total

    return (
        <Container className="check-out">
            <Row>
                <Col lg={6} md={12} className="order-form" data-aos="zoom-in">
                    <form onSubmit={handelSubmit}>
                        <h3>Contact</h3>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="emails" placeholder="Email" onChange={handelInput} />
                        <div className="err">{errs.emailsErr}</div>

                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" id="full-name" name="fullname" placeholder="Full Name" onChange={handelInput} />
                        <div className="err">{errs.fullnameErr}</div>

                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id="phone" name="phone" placeholder="Your Phone Number" onChange={handelInput} />
                        <div className="err">{errs.phoneErr}</div>

                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address" placeholder="Your Address" onChange={handelInput} />
                        <div className="err">{errs.addressErr}</div>

                        <label htmlFor="city">Town / City</label>
                        <input type="text" id="city" name="city" placeholder="Your Town Or City" onChange={handelInput} />
                        <div className="err">{errs.cityErr}</div>

                        <div className="pay-method">
                            <h2>Payment Method</h2>
                            <div className="cod-method mt-3">
                                <div className="left-cod">
                                    <input type="radio" checked={checkAtm} onChange={() => setCheckAtm(false)} />
                                </div>
                                <div className="right-cod">
                                    <i className="fa-solid fa-truck-fast me-2"></i>
                                    COD Payment on delivery
                                </div>
                            </div>
                            <div className="atm-method mt-3">
                                <div className="left-atm">
                                    <input type="radio" checked={!checkAtm} onChange={() => setCheckAtm(true)} />
                                </div>
                                <div className="right-atm">
                                    <i className="fa-solid fa-money-check me-2"></i>
                                    ATM BANKING
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="order-now mt-5">
                            Order Now
                        </button>
                    </form>
                </Col>

                <Col lg={6} md={12} className="product-check" data-aos="zoom-in">
                    <h2>Your Product</h2>
                    <div className="list-check">
                        {Product.map((item, index) => (
                            <div className="check-item" key={item.id} id={item.id}>
                                <div className="check-id">Product {index + 1}</div>
                                <div className="check-img">
                                    <img src={item.img} alt="" />
                                    <p>{item.title}</p>
                                    <span className="check-qtn">{item.quantity}</span>
                                </div>
                                <div className="check-price">
                                    <p>${item.sale_check ? ((item.price - (item.price * item.sale_value) / 100) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className="total-check mt-4">
                        Total: <span style={{ color: "#cf6cc9" }}>${totalDiscount.toFixed(2)}</span>
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}

export default CheckOut

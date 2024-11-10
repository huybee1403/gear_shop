import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"

import "./Footer.css"

const Footer = () => {
    // State
    const [showContact, setShowContact] = useState(false)
    const [showHelp, setShowHelp] = useState(false)
    const [showAccount, setShowAccount] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    // State

    return (
        <Container fluid className="footer">
            <div className="top-footer pb-5">
                <Row className="top-item" data-aos="fade-up">
                    <Col lg={3} md={6} className="item mb-4">
                        <h4 className="mb-3" onClick={() => setShowContact(!showContact)}>
                            Contact Us <span>+</span>
                        </h4>

                        <ul className={`${showContact ? "show" : ""}`}>
                            <li>2357 Gordon Street, CA</li>
                            <li>+ (909) - 478-2742</li>
                            <li>GearnixStore@Vinova.com</li>
                            <li>@VinovaGear</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="item mb-4" data-aos="fade-up">
                        <h4 className="mb-3" onClick={() => setShowHelp(!showHelp)}>
                            Let us help <span>+</span>
                        </h4>

                        <ul className={`${showHelp ? "show" : ""}`}>
                            <li>Track My Order</li>
                            <li>Cancel My Order</li>
                            <li>Return My Order</li>
                            <li>Search</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="item mb-4" data-aos="fade-up">
                        <h4 className="mb-3" onClick={() => setShowAccount(!showAccount)}>
                            My Account <span>+</span>
                        </h4>

                        <ul className={`${showAccount ? "show" : ""}`}>
                            <li>Store Location</li>
                            <li>Order History</li>
                            <li>Wish List</li>
                            <li>Gift Code</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={6} className="payment" data-aos="fade-up">
                        <h4 className="mb-3" onClick={() => setShowPayment(!showPayment)}>
                            Newsletters <span>+</span>
                        </h4>
                        <div className={`payment-bottom ${showPayment ? "show" : ""}`}>
                            <div className="submit mb-3">
                                <i className="fa-solid fa-right-to-bracket"></i>
                                <input style={{ width: "100%" }} type="text" placeholder="Enter Your Email" />
                            </div>
                            <h4 className="mb-3">Payments</h4>
                            <img style={{ width: "50%" }} src="https://nov-gearnix.myshopify.com/cdn/shop/files/payment_420x.png?v=1723168147" alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="bottom-footer mt-5 d-flex flex-column align-items-center justify-content-between">
                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258" alt="" />
                <h6 className="mt-4 text-center">Copyright © 2024 Vinovathemes. All Rights Reserved.</h6>
                <div className="social mt-3">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitch"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
            </div>
        </Container>
    )
}

export default Footer

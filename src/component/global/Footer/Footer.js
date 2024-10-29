import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import AOS from "aos"
import "./Footer.css"

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])

    return (
        <Container fluid className="footer" data-aos="zoom-in">
            <div className="top-footer pb-5">
                <Row className="top-item" data-aos="fade-up">
                    <Col lg={3} md={6} className={`item mb-4`}>
                        <h4 className="mb-3">
                            Contact Us <span>+</span>
                        </h4>
                        <li>2357 Gordon Street, CA</li>
                        <li>+ (909) - 478-2742</li>
                        <li>GearnixStore@Vinova.com</li>
                        <li>@VinovaGear</li>
                    </Col>
                    <Col lg={3} md={6} className={`item mb-4`} data-aos="fade-up">
                        <h4 className="mb-3">
                            Let us help <span>+</span>
                        </h4>
                        <li>Track My Order</li>
                        <li>Cancel My Order</li>
                        <li>Return My Order</li>
                        <li>Search</li>
                    </Col>
                    <Col lg={3} md={6} className={`item  mb-4`} data-aos="fade-up">
                        <h4 className="mb-3">
                            My Account <span>+</span>
                        </h4>
                        <li>Store Location</li>
                        <li>Order History</li>
                        <li>Wish List</li>
                        <li>Gift Code</li>
                    </Col>
                    <Col lg={3} md={6} className={`payment`} data-aos="fade-up">
                        <h4 className="mb-3">
                            Newsletters <span>+</span>
                        </h4>
                        <div className="submit mb-3">
                            <i className="fa-solid fa-right-to-bracket"></i>
                            <input style={{ width: "100%" }} type="text" placeholder="Enter Your Email" />
                        </div>
                        <h4 className="mb-3">Payments</h4>
                        <img style={{ width: "50%" }} src="https://nov-gearnix.myshopify.com/cdn/shop/files/payment_420x.png?v=1723168147" alt="" />
                    </Col>
                </Row>
            </div>
            <div className="bottom-footer mt-5 d-flex flex-column align-items-center justify-content-between" data-aos="fade-up">
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

import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Content.css"
import AOS from "aos"

const Content = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])

    return (
        <Container fluid className="mt-5 pt-3" data-aos="fade-up">
            <div className="content-tab">
                <Row>
                    <Col lg={3} md={6}>
                        <div className="content-item mb-3">
                            <div className="content-logo">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/p-1-1_200x.png?v=1722908548" alt="" />
                            </div>
                            <div className="content-inf">
                                <h3 className="title">Free Shipping</h3>
                                <p className="desc">Free Shipping to Make Your Shopping Experience Seamless.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="content-item mb-3">
                            <div className="content-logo">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/p-1-2_200x.png?v=1722908548" alt="" />
                            </div>
                            <div className="content-inf">
                                <h3 className="title">Return Policy</h3>
                                <p className="desc">Flexible Returns to Ensure a Positive Shopping Experience.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="content-item mb-3">
                            <div className="content-logo">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/p-1-3_200x.png?v=1722908549" alt="" />
                            </div>
                            <div className="content-inf">
                                <h3 className="title">Save Money</h3>
                                <p className="desc">Shop Smarter and Save Big with Our Money-Saving Solutions.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div className="content-item mb-3">
                            <div className="content-logo">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/p-1-4_200x.png?v=1722908548" alt="" />
                            </div>
                            <div className="content-inf">
                                <h3 className="title">Support 24/7</h3>
                                <p className="desc">Unparalleled Support,Tailored to Your Needs 24 Hours a Day.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Content

import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./BannerStory.css"
import AOS from "aos"

const BannerStory = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])

    return (
        <Container fluid className="banner-story">
            <Row className="banner-list">
                <Col className="banner-left d-flex flex-column justify-content-center" lg={6} data-aos="fade-down">
                    <p style={{ fontSize: "28px", color: "#d253ff" }} className="ms-5">
                        OUR STORY
                    </p>
                    <p className="banner-title ms-5">A PLACE FOR GAMERS TO FREELY CHOOSE AND SHOP ALL TYPES OF EQUIPMENT.</p>
                </Col>
                <Col className="banner-right d-flex justify-content-center" lg={6} data-aos="zoom-in-up">
                    <img src="//nov-gearnix.myshopify.com/cdn/shop/files/img-6-9.png?v=1724922396" alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default BannerStory

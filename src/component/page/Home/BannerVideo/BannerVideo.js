import React, { useState } from "react"
import { Button, Col, Container, Modal, Row } from "react-bootstrap"
import "./BannerVideo.css"

const BannerVideo = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <Container fluid className="banner-video" data-aos="fade-up">
            <Row>
                <Col className="left mb-5" lg={5} md={12}>
                    <div className="left-background">
                        <img src="//nov-gearnix.myshopify.com/cdn/shop/files/img-1-2_180x.jpg?v=1723196809" alt="" />
                    </div>
                    <div className="left-content">
                        <h1>
                            Gear Up <br />
                            Throw Down
                        </h1>
                        <p>Driven by gaming passion, we craft the finest gear to empower players. Our unwavering innovation and user focus make us an integral part of the global gaming community.</p>
                        <div className="buy-btn">
                            Shop Now <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </Col>
                <Col className="right" lg={7} md={12}>
                    <div className="right-background">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-1-1_1080x.jpg?v=1722911086" alt="" />
                    </div>
                    <Button variant="primary" className="play-video" onClick={handleShow}>
                        <i className="fa-solid fa-play"></i>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <iframe
                                width="100%"
                                height="800px"
                                src="https://www.youtube.com/embed/J8QLmYxPdvk?si=KfOulV1kouPKXQzy"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default BannerVideo

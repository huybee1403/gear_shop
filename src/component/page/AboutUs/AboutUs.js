import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./AboutUs.css"
const AboutUs = () => {
    return (
        <Container className="about-us">
            <div className="top">
                <h1>About Us</h1>
                <p>Home - About Us</p>
            </div>
            <div className="about-content">
                <img style={{ borderRadius: "22px" }} src="https://nov-gearnix.myshopify.com/cdn/shop/files/about-us_1512x.jpg?v=1725943677" alt="" data-aos="fade-up" />
                <p style={{ fontWeight: "bold", color: "white" }} data-aos="fade-up">
                    Lorem ipsum dolor sit am et, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                </p>
                <p style={{ color: "white" }} data-aos="fade-up">
                    Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo,
                    rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla
                    rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu,
                    iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis. Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id
                    scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo
                    et luctus rutrum, lobortis sed mauris.
                </p>
                <Row className="pt-3 pb-3" style={{ backgroundColor: "#17171a", borderRadius: "22px" }} data-aos="fade-up">
                    <Col lg={3} className="mb-3">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/quote_380x.png?v=1722679134" alt="" />
                    </Col>
                    <Col lg={9} className="d-flex flex-column justify-content-center">
                        <p style={{ color: "white", fontSize: "larger" }}>
                            Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!! Kwang Shang. -
                        </p>
                        <h3 style={{ fontWeight: "bold", color: "white" }}> CEO Vinovathemes</h3>
                    </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-center" data-aos="fade-up">
                    <Col lg={6}>
                        <h3 style={{ fontWeight: "bold", color: "white" }}>Why choose us ?</h3>
                        <p style={{ color: "white" }}>
                            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt
                            justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius
                            tristique.
                        </p>
                    </Col>
                    <Col lg={6}>
                        <img style={{ borderRadius: "28px" }} src="https://nov-gearnix.myshopify.com/cdn/shop/files/71390-shopping-cart-loader_768x.gif?v=1722679134" alt="" />
                    </Col>
                </Row>
                <Row className="mt-5 d-flex align-items-center" data-aos="fade-up">
                    <Col lg={6}>
                        <img style={{ borderRadius: "28px" }} src="https://nov-gearnix.myshopify.com/cdn/shop/files/74384-swipe-for-shopping_768x.gif?v=1722679135" alt="" />
                    </Col>
                    <Col lg={6}>
                        <h3 style={{ fontWeight: "bold", color: "white" }}>Trusted online shopping</h3>
                        <p style={{ color: "white" }}>
                            Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt
                            justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius
                            tristique.
                        </p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default AboutUs

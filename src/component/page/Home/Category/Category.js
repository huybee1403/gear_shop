import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Category.css"
import { Link } from "react-router-dom"

const Category = () => {
    return (
        <div className="category">
            <h1 className="title" data-aos="fade-up">
                SHOP BY CATEGORIES
            </h1>
            <h4 className="desc mb-5" data-aos="fade-up">
                Let Choose Your Best Gear
            </h4>
            <Container fluid>
                <Row>
                    <Col lg={3} md={6} className="mb-5" data-aos="fade-up">
                        <Link to="/category/keyboard">
                            <div className="cate-card">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-1_580x.jpg?v=1724896883" alt="" />
                                <div className="cate-content">
                                    <h4 className="cate-title">Keyboards Gaming</h4>

                                    <p>
                                        Shop now <i className="fa-solid fa-arrow-right"></i>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={6} className="mb-5" data-aos="fade-up">
                        <Link to="/category/mouse">
                            <div className="cate-card">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-2_580x.jpg?v=1724896883" alt="" />
                                <div className="cate-content">
                                    <h4 className="cate-title">Gaming Mouse</h4>
                                    <p>
                                        Shop now <i className="fa-solid fa-arrow-right"></i>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={6} className="mb-5" data-aos="fade-up">
                        <Link to="/category/headphone">
                            {" "}
                            <div className="cate-card">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-3_580x.jpg?v=1724896883" alt="" />
                                <div className="cate-content">
                                    <h4 className="cate-title">Headphones</h4>

                                    <p>
                                        Shop now <i className="fa-solid fa-arrow-right"></i>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col lg={3} md={6} className="mb-5" data-aos="fade-up">
                        <Link to="/category/console">
                            <div className="cate-card">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-4_580x.jpg?v=1724896883" alt="" />
                                <div className="cate-content">
                                    <h4 className="cate-title">Gaming Controllers</h4>
                                    <p>
                                        Shop now
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Category

import React, { useState } from "react"
import Slider from "react-slick"
import "./CardProduct.css"
import { Col, Modal, Row } from "react-bootstrap"
import { UseProduct } from "../../../ProductContext/ProductContext"

const CardProduct = ({ id, img, title, rate, price, img_details, details, sale_check, sale_value }) => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const { handleAddProduct } = UseProduct()

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="card-product" id={id} key={id}>
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-infor">
                <h5 className="title">{title}</h5>
                <div className="rate">
                    {[...Array(rate)].map((index) => (
                        <i key={index} style={{ color: "cf6cc9", marginRight: "7px" }} className="fa-solid fa-star"></i>
                    ))}
                </div>
                <div className="price">
                    <span className={`price-sale ${sale_check ? "active" : ""} `}>{sale_check ? (price - (price * sale_value) / 100).toFixed(2) : ""} $</span>
                    <h4 className={`price-value ${sale_check ? "active" : ""}`}>{price.toFixed(2)} $</h4>
                </div>
            </div>
            <div className="card-btn">
                <div className="btn-wishlist">
                    <span>Add To WishList</span>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="btn-addcart">
                    <span>Add To Cart</span>
                    <i onClick={() => handleAddProduct({ id, img, title, rate, price, img_details, details, sale_check, sale_value })} className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="btn-quickview">
                    <span>Quick View</span>
                    <i className="fa-regular fa-eye" onClick={handleShow}></i>
                </div>
            </div>
            <div className="quickview-popup">
                <Modal show={show} onHide={handleClose} size="xl" className="mt-5">
                    <Modal.Header closeButton>
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pb-5">
                        <div className="content-popup">
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <Slider {...settings}>
                                        {img_details.map((item) => (
                                            <img src={item} alt="" />
                                        ))}
                                    </Slider>
                                </Col>
                                <Col lg={6} className="d-flex flex-column gap-2">
                                    <h5 className="title" style={{ textAlign: "start" }}>
                                        {title}
                                    </h5>
                                    <h3 className="price-view">{sale_check ? (price - (price * sale_value) / 100).toFixed(2) : price} $</h3>
                                    <ul className="details p-0">
                                        <li>Details: </li>
                                        {details.map((item) => (
                                            <li>{item}</li>
                                        ))}
                                    </ul>
                                    <div className="quantity">
                                        <Row className="align-items-center">
                                            <Col className="position-relative" lg={4}>
                                                <i
                                                    className="fa-solid fa-plus"
                                                    style={{
                                                        position: "absolute",
                                                        right: "18px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer",
                                                    }}
                                                ></i>
                                                <input
                                                    type="text"
                                                    value={0}
                                                    style={{
                                                        width: "100%",
                                                        padding: "7px 0px",
                                                        borderRadius: "18px",
                                                        outline: "none",
                                                        border: "1px solid black",
                                                        textAlign: "center",
                                                    }}
                                                    disabled={true}
                                                />
                                                <i
                                                    className="fa-solid fa-minus"
                                                    style={{
                                                        position: "absolute",
                                                        left: "18px",
                                                        top: "50%",
                                                        transform: "translateY(-50%)",
                                                        cursor: "pointer",
                                                    }}
                                                ></i>
                                            </Col>
                                            <Col lg={8}>
                                                <div className="add-cart w-100 text-center">Add To Cart</div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="buy-now text-center">Buy It Now</div>
                                </Col>
                            </Row>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
            <div className={`sale ${sale_check ? "active" : ""}`}>Sale !</div>
        </div>
    )
}

export default CardProduct
import React, { useEffect, useState } from "react"
import "./CartDetails.css"
import { UseProduct } from "../../../ProductContext/ProductContext"
import { Col, Container, ProgressBar, Row, Table } from "react-bootstrap"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"

const CartDetails = () => {
    const { Product, handleQuantity, handleDelete } = UseProduct()
    const total = Product.reduce((total, item) => {
        const itemTotal = item.sale_check ? (item.price - (item.price * item.sale_value) / 100) * item.quantity : item.price * item.quantity
        return total + itemTotal
    }, 0)

    const progress = total > 900.0 ? 100 : (total / 900) * 100

    const totalDiscount = total > 900.0 ? total - total * 0.2 : total

    useEffect(() => {
        if (progress === 100) {
            toast.success("Congratulations On Your 20% Discount!")
        }
    }, [progress])

    return (
        <Container className="cart-details">
            <div className="top">
                <h1>Cart Details</h1>
                <p>Home - Cart Details</p>
            </div>
            <Row className="mt-5">
                <Col md={12} className="shopping-cart" style={Product.length === 0 ? { display: "none" } : { display: "block" }} data-aos="zoom-in">
                    {Product.map((item) => (
                        <div className="shopping-item" key={item.id} id={item.id}>
                            <div className="shop-img">
                                <img src={item.img} alt="" />
                                <p>{item.title}</p>
                            </div>
                            <div className="shop-price">
                                <p>${item.sale_check ? ((item.price - (item.price * item.sale_value) / 100) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="shop-qtn">
                                <i className="fa-solid fa-plus" onClick={() => handleQuantity("plus", item.id)}></i>
                                <input type="text" disabled={true} value={item.quantity} />
                                <i className="fa-solid fa-minus" onClick={() => handleQuantity("minus", item.id)}></i>
                            </div>
                            <div className="shop-btn">
                                <i className="fa-solid fa-trash" onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }}></i>
                            </div>
                        </div>
                    ))}
                </Col>
                <Col md={12} data-aos="zoom-in">
                    <div className="total-product">
                        <div className="top-title">There are {Product.length} items in your cart</div>
                        <div className="total-content">
                            <h5 className="d-flex justify-content-between ms-3 me-5">
                                Total :<span style={{ color: "#cf6cc9" }}> ${totalDiscount.toFixed(2)}</span>
                            </h5>
                            <div className="progess mt-4">
                                <p className="ms-3">
                                    Spend $ <span style={{ color: "#cf6cc9" }}>{progress >= 100 ? 0 : (900.0 - total).toFixed(2)}</span> for <span style={{ color: "#cf6cc9" }}>Gift Sale 20%</span>
                                </p>
                                <ProgressBar now={progress} className="ms-3" />
                            </div>
                            <p className="ms-3 mt-4">
                                <span style={{ color: "#cf6cc9" }}>Gift Sale 20%</span> for any orders above ${900.0}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="button">
                <Link to="/product">
                    <h4 className="continue-shop" data-aos="zoom-in">
                        Continue Shopping
                    </h4>
                </Link>
                <Link to="/checkout" data-aos="zoom-in">
                    <h4 className="checkOut-btn">To Checkout</h4>
                </Link>
            </div>
        </Container>
    )
}

export default CartDetails

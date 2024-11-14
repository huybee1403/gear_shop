import React from "react";
import { Col, Container } from "react-bootstrap";
import { UseProduct } from "../../../ProductContext/ProductContext";
import "./WishList.css";
import { useNavigate } from "react-router-dom";

const WishList = () => {
    const { wishList, handleDeleteWish } = UseProduct();
    const navigate = useNavigate();
    return (
        <Container className="list-wish">
            <div className="top">
                <h1>Wish List</h1>
                <p>Home - Wish List</p>
            </div>
            <Col md={12} className="wish-list" style={wishList.length === 0 ? { display: "none" } : { display: "block" }} data-aos="zoom-in">
                {wishList.map((item) => (
                    <div className="wish-item" key={item.id} id={item.id}>
                        <div className="wish-img">
                            <img src={item.img} alt="" />
                            <p className="text-center">{item.title}</p>
                        </div>
                        <div className="wish-price">
                            <p>${item.sale_check ? (item.price - (item.price * item.sale_value) / 100).toFixed(2) : item.price.toFixed(2)}</p>
                        </div>
                        <div className="wish-shop" onClick={() => navigate(`/details/${item.id}`)}>
                            Shopping
                        </div>
                        <div className="wish-btn">
                            <i className="fa-solid fa-trash" onClick={() => handleDeleteWish(item.id)} style={{ cursor: "pointer" }}></i>
                        </div>
                    </div>
                ))}
            </Col>
        </Container>
    );
};

export default WishList;

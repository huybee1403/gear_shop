import React, { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import "./CustomerRate.css"
import AOS from "aos"

const CustomerRate = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <Container fluid className="customer-rate mt-5" data-aos="zoom-in">
            <div className="top-content mb-3 text-center">
                <h1 style={{color:"white", fontFamily:"Orbitron"}}>What Customers Say About</h1>
                <h1 style={{color: "#e25fa5", fontFamily:"Orbitron"}}>Our Products</h1>
                <p style={{color: "white"}}>This device has set a new standard in the gaming world.</p>
            </div>
            <Slider {...settings}>
                <div className="customer-item">
                    <div className="custom-img">
                        <img src="//nov-gearnix.myshopify.com/cdn/shop/files/img-6-13.jpg?v=1725003937" alt="" />
                    </div>
                    <div className="custom-rate">
                        <h3 className="custom-name">Earl S. West</h3>
                        <div className="star">
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        </div>
                        <p className="comment">
                            "The headset is phenomenal! The sound quality is crystal clear, and the noise-cancelling feature really immerses me in the game. This is a must-have for any serious gamer."
                        </p>
                    </div>
                </div>
                <div className="customer-item">
                    <div className="custom-img">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-16.jpg?v=1725003937" alt="" />
                    </div>
                    <div className="custom-rate">
                        <h3 className="custom-name">Timothy A. Thompson</h3>
                        <div className="star">
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        </div>
                        <p className="comment">
                            "Switching to this new controller has transformed my gaming experience. The ergonomic design and responsive buttons make every session a joy. I can’t imagine going back!"
                        </p>
                    </div>
                </div>
                <div className="customer-item">
                    <div className="custom-img">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-12.jpg?v=1725003937" alt="" />
                    </div>
                    <div className="custom-rate">
                        <h3 className="custom-name">Lindsay J. Ross</h3>
                        <div className="star">
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        </div>
                        <p className="comment">
                            “The controllers has completely transformed my gaming experience. The precision and responsiveness are out of this world - I've noticed a dramatic improvement in my aim and
                            overall performance.”
                        </p>
                    </div>
                </div>
                <div className="customer-item">
                    <div className="custom-img">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-14.jpg?v=1725003938" alt="" />
                    </div>
                    <div className="custom-rate">
                        <h3 className="custom-name">Sally H. McDuffie</h3>
                        <div className="star">
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        </div>
                        <p className="comment">
                            "I recently upgraded to a mechanical keyboard, and I’m amazed at the difference it makes. The tactile feedback and customizable keys have improved my speed and accuracy!"
                        </p>
                    </div>
                </div>
                <div className="customer-item">
                    <div className="custom-img">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-6-15.jpg?v=1725003937" alt="" />
                    </div>
                    <div className="custom-rate">
                        <h3 className="custom-name">Syble F. Romans</h3>
                        <div className="star">
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                            <i style={{ color: "#e25fa5", marginRight: "7px" }} className="fa-solid fa-star"></i>
                        </div>
                        <p className="comment">
                            "The gaming mouse I purchased has completely changed my gameplay. Its precision and comfort give me the edge I need during intense matches. Highly recommend!"
                        </p>
                    </div>
                </div>
            </Slider>
        </Container>
    )
}

export default CustomerRate

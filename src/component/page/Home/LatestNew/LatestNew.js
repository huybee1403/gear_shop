import React from "react"
import Slider from "react-slick"
import newArray from "./new"
import "./LatestNew.css"
import { Link } from "react-router-dom"

const LatestNew = () => {
    const news = newArray
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
                    slidesToScroll: 2,
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
        <div className="latest-new" data-aos="fade-right">
            <h1 style={{ fontFamily: "Orbitron", textAlign: "center", color: "white" }}>Latest News</h1>
            <h4 style={{ fontFamily: "Orbitron", color: "#e25fa5", textAlign: "center" }}>Explore the cutting edge of technology and innovation</h4>
            <div className="slider-container">
                <Slider {...settings}>
                    {news.map((item) => (
                        <Link to={`/new/${item.id}`} key={item.id}>
                            <div className="new-item mt-4" id={item.id}>
                                <div className="new-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="new-content">
                                    <h6 className="mb-3">By Vinova Theme</h6>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                    <div className="btn-read">
                                        Read More
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default LatestNew

import React from "react"
import "./New.css"
import { Col, Container, Modal, Row } from "react-bootstrap"
import newArray from "../Home/LatestNew/new"
import { useParams } from "react-router-dom"
import { UseProduct } from "../../../ProductContext/ProductContext"
import Slider from "react-slick"
import CardProduct from "../../global/CardProduct/CardProduct"

const New = () => {
    const { slug: id } = useParams()
    const { recentView } = UseProduct()

    const news = newArray.filter((item) => item.id === parseInt(id))

    var recentSettings = {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: recentView.length === 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <Container className="news">
            {news.map((item) => (
                <div className="new-item" key={item.id}>
                    <h2>{item.title}</h2>
                    <img data-aos="zoom-in" src={item.img} alt="" />
                    <h3 data-aos="fade-left">{item.title}</h3>
                    <p data-aos="fade-right">{item.desc}</p>
                </div>
            ))}
            <div className="recent-view mt-5">
                <h3 className="title mb-5" data-aos="fade-down">
                    RECENTLY VIEWED PRODUCTS
                </h3>
                <div className="slider-container" data-aos="fade-right">
                    <Slider {...recentSettings}>
                        {recentView.map((item) => (
                            <CardProduct
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                rate={item.rate}
                                price={item.price}
                                img_details={item.img_details}
                                details={item.details}
                                sale_check={item.sale_check}
                                sale_value={item.sale_value}
                            ></CardProduct>
                        ))}
                    </Slider>
                </div>
            </div>
        </Container>
    )
}

export default New

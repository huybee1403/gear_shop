import React, { useEffect } from "react"
import useFetch from "../../../../Feature/useFetch"
import { Container } from "react-bootstrap"
import Slider from "react-slick"
import CardProduct from "../../../global/CardProduct/CardProduct"
import "./TopRated.css"
import AOS from "aos"

const TopRated = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: false,
        })
    }, [])

    const data_Product = useFetch(`https://6717cc55b910c6a6e02a08be.mockapi.io/products/?rate=5`)

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
        <Container fluid className="top-rate mb-5">
            <div className="slider-container">
                <h1 className="title" data-aos="fade-down">
                    Top Rated Product’s
                </h1>
                <h4 className="desc mb-5" data-aos="fade-up">
                    Master Your Battleground Elevate Your Game with Our Elite-Reviewed Gear
                </h4>
                <Slider {...settings}>
                    {data_Product &&
                        data_Product.map((item) => (
                            <CardProduct
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                rate={item.rate}
                                price={item.price}
                                img_details={item.img_details}
                                details={item.details}
                                sale_check={item.sale ? item.sale.sale_check : false}
                                sale_value={item.sale ? item.sale.sale_value : 0}
                            ></CardProduct>
                        ))}
                </Slider>
            </div>
        </Container>
    )
}

export default TopRated

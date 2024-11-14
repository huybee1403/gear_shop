import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import useFetch from "../../../Feature/useFetch"
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap"
import Slider from "react-slick"
import "./Details.css"
import { UseProduct } from "../../../ProductContext/ProductContext"
import CardProduct from "../../global/CardProduct/CardProduct"

const Details = () => {
    const { slug: id } = useParams()
    const data = useFetch(`https://6717cc55b910c6a6e02a08be.mockapi.io/products/${id}`)
    const { recentView, handleAddProduct } = UseProduct()
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === "plus") {
            setQuantity(quantity + 1)
        } else if (type === "minus") {
            setQuantity(quantity - 1)
            if (quantity <= 1) {
                setQuantity(1)
            }
        }
    }

    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
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
        <Container className="details-page">
            <div className="top">
                <h1>Details</h1>
                <p>Product - {data.title}</p>
            </div>
            <Row>
                <Col lg={6} md={12} className="left">
                    {data && data.img_details && (
                        <Slider {...settings}>
                            {data.img_details.map((item, index) => (
                                <img key={index} src={item} alt="" />
                            ))}
                        </Slider>
                    )}
                </Col>
                <Col lg={6} md={12} className="right">
                    <h1 className="details-title">{data && data.title && data.title}</h1>
                    <div className="rate">{data && data.rate && [...Array(5)].map((index) => <i key={index} style={{ color: "yellow", marginRight: "7px" }} className="fa-solid fa-star"></i>)}</div>
                    <h3 className="details-price">${data && data.price && data.price}</h3>
                    <ul className="details-list p-0">{data && data.details && data.details.map((item) => <li> {item}</li>)}</ul>
                    <div className="details-quantity">
                        <Row className="align-items-center">
                            <Col className="position-relative" lg={4}>
                                <i
                                    className="fa-solid fa-plus"
                                    onClick={() => handleQuantity("plus")}
                                    style={{
                                        position: "absolute",
                                        right: "18px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "black",
                                    }}
                                ></i>
                                <input
                                    type="text"
                                    value={quantity}
                                    style={{
                                        width: "100%",
                                        padding: "7px 0px",
                                        borderRadius: "18px",
                                        outline: "none",
                                        border: "1px solid black",
                                        textAlign: "center",
                                        backgroundColor: "white",
                                    }}
                                    disabled={true}
                                />
                                <i
                                    className="fa-solid fa-minus"
                                    onClick={() => handleQuantity("minus")}
                                    style={{
                                        position: "absolute",
                                        left: "18px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        cursor: "pointer",
                                        color: "black",
                                    }}
                                ></i>
                            </Col>
                            <Col lg={8}>
                                <div className="add-cart w-100 text-center" onClick={() => handleAddProduct(data)}>
                                    Add To Cart
                                </div>
                            </Col>
                        </Row>
                        <Link to="/checkout">
                            <div className="buy-now text-center mb-4">Buy It Now</div>
                        </Link>
                        <div className="checkOut">
                            <h3 className="mb-4">Guaranteed safe checkout:</h3>
                            <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/payment-detail_700x.png?v=1723170576" alt="" />
                        </div>
                        <p className="mt-4">
                            <i className="fa-solid fa-clock me-2"></i>Orders ship within 5 to 10 business days.
                        </p>
                        <p className="mt-4">
                            <i className="fa-solid fa-truck-fast me-2"></i>Hoorey ! This item ships free to the US
                        </p>
                    </div>
                </Col>
            </Row>
            <div className="details-tabcontent" data-aos="zoom-in">
                <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="Description" title="Description">
                        <p style={{ color: "white" }}>
                            IronCaptivate with this shirt’s versatile urban look that works as well at happy hour as it does in the back yard. The real mother of pearl buttons and embroidered
                            crocodile complete its elegant appeal.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
                            et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <h5 style={{ color: "#f5576c", fontWeight: "600" }}>Sample Ordered Lista</h5>
                        <ul style={{ color: "white", listStyle: "inherit" }}>
                            <li>Comodous in tempor ullamcorper miaculis</li>
                            <li>Pellentesque vitae neque mollis urna mattis laoreet.</li>
                            <li>Divamus sit amet purus justo.</li>
                            <li>Proin molestie egestas orci ac suscipit risus posuere loremous</li>
                        </ul>
                        <h5 style={{ color: "#f5576c", fontWeight: "600" }}>Sample Paragraph Text</h5>
                        <p style={{ color: "white" }}>
                            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!Faded short
                            sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summe!Aenean massa. Cum sociis
                            natoque penatibus et magnis dis parturient montes, nascetur ridicu lus mus. Donec quam felis, ultri cies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                            enim.
                        </p>
                    </Tab>
                    <Tab eventKey="Delivery policy" title="Delivery policy">
                        <p style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate, lectus ac pretium maximus, magna neque fermentum arcu, ut pulvinar arcu erat vel massa.
                            Pellentesque ac arcu blandit, vestibulum tortor eget, dictum magna. Curabitur sit amet metus nulla. Pellentesque et augue et urna volutpat vestibulum vitae eget ligula.
                            Maecenas mi augue, faucibus scelerisque facilisis in, dignissim vitae justo. Sed venenatis lectus et leo malesuada iaculis. Nunc lacinia arcu id elementum rhoncus. Duis
                            tempor, enim vel vulputate interdum, magna sapien lacinia enim, nec lobortis quam enim eu erat. Aenean faucibus ex vitae nibh accumsan ullamcorper. Sed a orci augue.
                            Maecenas porttitor venenatis semper.
                        </p>
                    </Tab>
                    <Tab eventKey="Shipping & Return    " title="Shipping & Return  ">
                        <p style={{ color: "white" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus libero quis mauris vestibulum dapibus. Maecenas ullamcorper erat mi, vel consequat enim suscipit at.
                            Pellentesque a elit at elit
                        </p>
                    </Tab>
                    <Tab eventKey="Custom Tab" title="Custom Tab">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Keycap</th>
                                    <th>Type Connet</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Tab>
                </Tabs>
            </div>
            <div className="recent-view">
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

export default Details

import React from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../../Feature/useFetch"
import { Col, Container, Row } from "react-bootstrap"
import "./Search.css"
import CardProduct from "../../global/CardProduct/CardProduct"
const Search = () => {
    const { slug: keysearh } = useParams()
    const searchData = useFetch(`https://6717cc55b910c6a6e02a08be.mockapi.io/products?title=${keysearh}`)
    return (
        <Container fluid className="search-page">
            <div className="top">
                <h1>Search Page</h1>
                <p>Home - Search</p>
            </div>

            <Row className="d-flex align-items-center justify-content-center mt-5">
                {searchData.map((item) => (
                    <Col lg={4} md={6} key={item.id} className="mb-5" data-aos="zoom-in">
                        <CardProduct
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
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Search

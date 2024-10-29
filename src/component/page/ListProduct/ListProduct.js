import React, { useEffect } from "react"
import "./ListProduct.css"
import Header from "../../global/Header/Header"
import useFetch from "../../../Feature/useFetch"
import CardProduct from "../../global/CardProduct/CardProduct"
import { Col, Row } from "react-bootstrap"
const ListProduct = () => {
    const data = useFetch("https://6717cc55b910c6a6e02a08be.mockapi.io/products")
    useEffect(() => {
        document.body.style.backgroundColor = "white"

        return () => {
            document.body.style.backgroundColor = ""
        }
    }, [])

    return (
        <div className="list-item">
            <Header></Header>
            <Row className="d-flex align-items-center justify-content-center">
                {data.map((item) => (
                    <Col lg={4} md={6} key={item.id} className="mb-5">
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
        </div>
    )
}

export default ListProduct

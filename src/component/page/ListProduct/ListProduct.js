import React, { useEffect, useRef, useState } from "react"
import useFetch from "../../../Feature/useFetch"
import CardProduct from "../../global/CardProduct/CardProduct"
import { Col, Container, ProgressBar, Row } from "react-bootstrap"
import ReactSlider from "react-slider"
import "./ListProduct.css"

const ListProduct = () => {
    const min = 0
    const max = 200
    const data = useFetch("https://6717cc55b910c6a6e02a08be.mockapi.io/products")

    // State
    const [values, setValues] = useState([min, max])
    const [filter, setFilter] = useState(false)
    const [dataFilter, setdataFilter] = useState([])
    const [selectedCate, setSelectedCate] = useState([])
    const [selectedBrand, setSelectedBrand] = useState([])
    const [showMore, setShowMore] = useState(6)
    // State
    useEffect(() => {
        setdataFilter(data)
    }, [data])
    // Ref
    const iconFilter = useRef()
    const filterPopUp = useRef()
    // Ref

    //Filte-Data
    const filterData = data.filter((item) => {
        const cateFilter = selectedCate.length > 0 ? selectedCate.includes(item.category) : true
        const brandFilter = selectedBrand.length > 0 ? selectedBrand.includes(item.brand) : true
        const priceFilter = item.price >= values[0] && item.price <= values[1]
        return cateFilter && brandFilter && priceFilter
    })

    const addCategory = (category) => {
        setSelectedCate((prev) => (prev.includes(category) ? prev : [...prev, category]))
    }
    const removeCategory = (category) => {
        setSelectedCate((prev) => prev.includes(category) && prev.filter((catefilter) => catefilter !== category))
    }

    const addBrand = (brand) => {
        setSelectedBrand((prev) => (prev.includes(brand) ? prev : [...prev, brand]))
    }
    const removeBrand = (brand) => {
        setSelectedBrand((prev) => prev.includes(brand) && prev.filter((brandfilter) => brandfilter !== brand))
    }
    useEffect(() => {
        setdataFilter(filterData)
    }, [selectedCate, selectedBrand, values])
    //Filte-Data

    //Show More Product
    const showMoreProducts = () => {
        setShowMore((prev) => prev + 3)
    }
    //Show More Product

    // CLickOutSide
    useEffect(() => {
        const handleClickOut = (e) => {
            //Filter Menu
            if (filterPopUp.current && !filterPopUp.current.contains(e.target)) {
                setFilter(false)
            }
            if (iconFilter.current && iconFilter.current.contains(e.target)) {
                setFilter(true)
            }
            //Filter Menu
        }
        document.addEventListener("click", handleClickOut)
    }, [])
    // CLickOutSide

    //ClearAll
    const clearAllFilters = () => {
        setSelectedCate([])
        setSelectedBrand([])
        setValues([min, max])
    }
    //ClearAll

    return (
        <Container fluid className="list-item">
            <div className="top">
                <h1>List Product</h1>
                <p>Home - Products</p>
            </div>
            <div className="filter-item mb-5 ps-4">
                <h1 className="btn-filter" ref={iconFilter}>
                    <i className="fa-solid fa-filter"></i> FILTER BY
                </h1>
                <div ref={filterPopUp} className={`list-filter ${filter ? "active" : ""}`}>
                    <div className="top">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_black.png?v=1722670265&width=150" alt="" />
                        <div className="close-btn">
                            <i className="fa-solid fa-xmark" onClick={() => setFilter(false)}></i>
                        </div>
                    </div>
                    <div className="your-choice mt-5">
                        <h5 className="d-flex align-items-center gap-2 mb-3">
                            <i className="fa-solid fa-tag"></i>Your Tag Filter :
                        </h5>
                        <div className="list-tag">
                            {selectedCate.map((item, index) => (
                                <div key={index} className="tag-item">
                                    {item.toUpperCase()} <i key={index} className="fa-solid fa-xmark me-3" onClick={() => removeCategory(item)}></i>
                                </div>
                            ))}
                            {selectedBrand.map((item, index) => (
                                <div key={index} className="tag-item">
                                    {item.toUpperCase()} <i key={index} className="fa-solid fa-xmark me-3" onClick={() => removeBrand(item)}></i>
                                </div>
                            ))}
                            <div className="tag-item">
                                Price Range: ${values[0]} - ${values[1]}
                            </div>
                        </div>
                    </div>
                    <div className="cate-filter mt-4">
                        <h5 className="d-flex align-items-center gap-2 mb-3">
                            <i className="fa-solid fa-list" style={{ fontSize: "15px" }}></i> Category
                        </h5>
                        <div className="list-cate">
                            <div className="cate-item" onClick={() => addCategory("mouse")}>
                                Gaming Mouse <i className="fa-solid fa-computer-mouse ms-1"></i>
                            </div>
                            <div className="cate-item" onClick={() => addCategory("keyboard")}>
                                Gaming KeyBoard <i className="fa-solid fa-keyboard ms-1"></i>
                            </div>
                            <div className="cate-item" onClick={() => addCategory("headphone")}>
                                Gaming Headphones <i className="fa-solid fa-headphones ms-1"></i>
                            </div>
                            <div className="cate-item" onClick={() => addCategory("console")}>
                                Gaming Console <i className="fa-solid fa-gamepad ms-1"></i>
                            </div>
                            <div className="cate-item" onClick={() => addCategory("mouse", "keyboard", "headphone", "console")}>
                                All Products
                            </div>
                        </div>
                    </div>
                    <div className="brand-filter mt-4">
                        <h5 className="d-flex align-items-center gap-2 mb-3">Brand :</h5>
                        <div className="list-brand">
                            <div className="brand-item" onClick={() => addBrand("akko")}>
                                Akko
                            </div>
                            <div className="brand-item" onClick={() => addBrand("logitech")}>
                                Logitech
                            </div>
                            <div className="brand-item" onClick={() => addBrand("corsair")}>
                                Corsair
                            </div>
                            <div className="brand-item" onClick={() => addBrand("steelseries")}>
                                Steelseries
                            </div>
                            <div className="brand-item" onClick={() => addBrand("daeru")}>
                                Daeru
                            </div>
                            <div className="brand-item" onClick={() => addBrand("rapoo")}>
                                Rapoo
                            </div>
                            <div className="brand-item" onClick={() => addBrand("razer")}>
                                Razer
                            </div>
                            <div className="brand-item" onClick={() => addBrand("sony")}>
                                Sony
                            </div>
                        </div>
                    </div>
                    <div className="price-filter mt-4">
                        <h5 className="d-flex align-items-center gap-2 mb-3">Price Range :</h5>
                        <div className="price-range mt-4">
                            <div className="min-price">
                                Min-Range: <input type="text" disabled={true} value={values[0]} />
                            </div>
                            <div className="max-pricem mt-4">
                                Max-Range: <input type="text" disabled={true} value={values[1]} />
                            </div>
                        </div>
                        <div className="price-slider mt-4">
                            <h5 className="mb-4">Slider-Price :</h5>
                            <ReactSlider className="slider" value={values} min={min} max={max} onChange={setValues} thumbClassName="thumb" trackClassName="track" minDistance={20} />
                        </div>
                    </div>
                    <div className="clear-all">
                        <h3 className="m-0 d-flex align-items-center gap-1" onClick={clearAllFilters}>
                            Clear All <i className="fa-solid fa-trash ms-4"></i>
                        </h3>
                    </div>
                </div>
            </div>
            <Row className="d-flex align-items-center justify-content-center">
                {dataFilter.slice(0, showMore).map((item) => (
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
            <div className="show-more">
                <button className="show-more-btn" onClick={showMoreProducts}>
                    Show More Product
                </button>
                <div className="product-lenght">
                    <p style={{ color: "white" }}>
                        Showing <span style={{ color: "#cf6cc9", fontWeight: "500" }}>{dataFilter.slice(0, showMore).length}</span> of{" "}
                        <span style={{ color: "#cf6cc9", fontWeight: "500" }}>{dataFilter.length}</span> products
                    </p>
                    <ProgressBar now={Math.floor((dataFilter.slice(0, showMore).length / dataFilter.length) * 100)} />
                </div>
            </div>
        </Container>
    )
}

export default ListProduct

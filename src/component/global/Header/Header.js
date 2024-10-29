import React, { useCallback, useEffect, useRef, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "./Header.css"
import axios from "axios"
import debounce from "lodash/debounce"
import { Link } from "react-router-dom"

const Header = () => {
    // State
    const [resProdct, setResProdct] = useState(true)
    const [result, setResult] = useState([])
    const [query, setQuery] = useState("")
    const [resMenu, setResMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const [cart, setCart] = useState(false)
    // State

    // Ref
    const refResMenu = useRef()
    const iconResMenu = useRef()
    const iconResSearch = useRef()
    const resSearch = useRef()
    const cartRef = useRef()
    const iconCart = useRef()
    // Ref

    //Search Real Time
    const fetchResult = async (searchQuery) => {
        if (!searchQuery) setResult([])
        if (searchQuery) {
            try {
                const response = await axios.get(`https://6717cc55b910c6a6e02a08be.mockapi.io/products/?title=${searchQuery.trim()}`)
                setResult(response.data)
            } catch (error) {
                console.error(error)
            }
        }
    }

    const debouncedFetchResults = useCallback(
        debounce((query) => fetchResult(query), 300),
        []
    )

    useEffect(() => {
        debouncedFetchResults(query)
        return () => {
            debouncedFetchResults.cancel()
        }
    }, [query, debouncedFetchResults])

    //Search Real Time

    // CLickOutSide
    useEffect(() => {
        const handleClickOut = (e) => {
            //Responsive Menu
            if (refResMenu.current && !refResMenu.current.contains(e.target)) {
                setResMenu(false)
            }
            if (iconResMenu.current && iconResMenu.current.contains(e.target)) {
                setResMenu(true)
            }
            //Responsive Menu

            //Responsive Search PopUp
            if (resSearch.current && !resSearch.current.contains(e.target)) {
                setSearch(false)
            }
            if (iconResSearch.current && iconResSearch.current.contains(e.target)) {
                setSearch(true)
            }
            //Responsive Search PopUp

            //Cart Pop Up
            if (cartRef.current && !cartRef.current.contains(e.target)) {
                setCart(false)
            }
            if (iconCart.current && iconCart.current.contains(e.target)) {
                setCart(true)
            }
            //Cart Pop Up
        }
        document.addEventListener("click", handleClickOut)
    }, [])
    // CLickOutSide

    return (
        <>
            <Container fluid className="header pt-4 pb-4 d-flex flex-row align-items-center justify-content-around">
                <Link to='/'><div className="logo d-flex">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258&width=150" alt="" />
                </div>
                </Link>
                <ul className="menu d-flex gap-5 align-items-center m-0">
                    <Link to='/' style={{color: "white"}}><li>Home</li></Link>
                    <Link to="/product" style={{color: "white"}}>
                        <li className="products">
                            Products
                            <div className="cate-product">
                                <Row className="pt-3 pb-3">
                                    <Col lg={6} className="d-flex align-items-center justify-content-center mt-4 mb-5">
                                        <div className="product-item">
                                            <div className="img-product">
                                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-1_900x.jpg?v=1724640419" alt="" />
                                            </div>
                                            <div className="content-product">
                                                <h4 className="title mb-3" style={{ color: "black" }}>
                                                    Gaming Mouse
                                                </h4>
                                                <div className="btn-shop">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="d-flex align-items-center justify-content-center mt-4 mb-5">
                                        <div className="product-item">
                                            <div className="img-product">
                                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-2_900x.jpg?v=1724640419" alt="" />
                                            </div>
                                            <div className="content-product">
                                                <h4 className="title mb-3" style={{ color: "black" }}>
                                                    Keyboard
                                                </h4>
                                                <div className="btn-shop">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="d-flex align-items-center justify-content-center mb-5">
                                        <div className="product-item">
                                            <div className="img-product">
                                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-3_900x.jpg?v=1724640419" alt="" />
                                            </div>
                                            <div className="content-product">
                                                <h4 className="title mb-3" style={{ color: "black" }}>
                                                    Headphones
                                                </h4>
                                                <div className="btn-shop">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6} className="d-flex align-items-center justify-content-center mb-5">
                                        <div className="product-item">
                                            <div className="img-product">
                                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/img-5-4_900x.jpg?v=1724640419" alt="" />
                                            </div>
                                            <div className="content-product">
                                                <h4 className="title mb-3" style={{ color: "black" }}>
                                                    Gaming Console
                                                </h4>
                                                <div className="btn-shop">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                    Shop Now
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </li>
                    </Link>
                    <li>Contact Us</li>
                    <li>News</li>
                </ul>
                <div className="btn-icon">
                    <i className="fa-solid fa-magnifying-glass" ref={iconResSearch}></i>
                    <i className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-cart-shopping" ref={iconCart}></i>
                    <i ref={iconResMenu} className="fa-solid fa-bars"></i>
                </div>
                <div ref={resSearch} className={`search-popup ${search ? "active" : ""}`}>
                    <form action="" className="search-input">
                        <input type="text" placeholder="Enter Your Key Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                    <div className="result">
                        {result.map((item) => (
                            <Row className="list-item pt-2 pb-2" key={item.id}>
                                <Col lg={4} className="img-item">
                                    <img src={item.img} alt="" />
                                </Col>
                                <Col lg={8} className="infor d-flex justify-content-center flex-column">
                                    <h5>{item.title}</h5>
                                    <p>{item.price} $</p>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </div>
                <div ref={refResMenu} className={`menu-container ${resMenu ? "active" : ""}`}>
                    <div className="close-btn" onClick={() => setResMenu(false)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className={`res-menu ${resProdct ? "active" : ""}`}>
                        <li>
                            Home{" "}
                            <span>
                                <i className="fa-solid fa-house"></i>
                            </span>
                        </li>
                        <li onClick={() => setResProdct(!resProdct)}>
                            Product
                            <span>
                                <i className="fa-solid fa-list"></i>
                            </span>
                        </li>
                        <li>
                            Pages{" "}
                            <span>
                                <i className="fa-solid fa-file-lines"></i>
                            </span>
                        </li>
                        <li>
                            Contact Us{" "}
                            <span>
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                        </li>
                        <li>
                            News{" "}
                            <span>
                                <i className="fa-solid fa-newspaper"></i>
                            </span>
                        </li>
                    </ul>
                    <ul className={`sub-product p-0 mt-1 ${resProdct ? "" : "active"}`}>
                        <li onClick={() => setResProdct(!resProdct)}>
                            Return{" "}
                            <span>
                                <i className="fa-solid fa-arrow-rotate-left"></i>
                            </span>
                        </li>
                        <li>
                            Gaming Keyboard{" "}
                            <span>
                                <i className="fa-solid fa-keyboard"></i>
                            </span>
                        </li>
                        <li>
                            Gaming Mouse{" "}
                            <span>
                                <i className="fa-solid fa-computer-mouse"></i>
                            </span>
                        </li>
                        <li>
                            Gaming Headphone{" "}
                            <span>
                                <i className="fa-solid fa-headphones"></i>
                            </span>
                        </li>
                        <li>
                            Gaming Console{" "}
                            <span>
                                <i className="fa-solid fa-gamepad"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div ref={cartRef} className={`cart-popup ${cart ? "active" : ""}`}>
                    <div className="top">
                        <div className="top-title">
                            <h6>My Cart: </h6>
                            <span>0 item</span>
                        </div>
                        <div className="close-btn">
                            <i className="fa-solid fa-xmark" onClick={() => setCart(false)}></i>
                        </div>
                    </div>
                    {/* <div className="empty">
                        <div className="cart-empty mt-5">
                            <div className="empty-img">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/t/2/assets/cart-empty.webp" alt="" />
                            </div>
                            <p className="text-center">Your cart is currently empty.</p>
                            <div className="list-btn mt-5">
                                <div className="btn">Mouse</div>
                                <div className="btn">Keyboard</div>
                                <div className="btn">Headphones</div>
                                <div className="btn">Controler</div>
                            </div>
                        </div>
                    </div> */}
                    <div className="none-empty">
                        <div className="cart-item">
                            <div className="cart-img">
                                <img
                                    style={{ width: "150px", height: "150px" }}
                                    src="https://product.hstatic.net/200000722513/product/_____20240816153223_c42865bb150b497193dbfa2fa870796e_grande.png"
                                    alt=""
                                />
                            </div>
                            <div className="cart-content">
                                <div className="cart-title mb-2" style={{ fontSize: "14px" }}>
                                    AKKO 5075B Plus Transparent ASA Black Piano Pro
                                </div>
                                <div className="cart-price" style={{ color: "red", fontWeight: "500" }}>
                                    70.46 $
                                </div>
                                <div className="cart-quantity mt-2 mb-2">
                                    <i className="fa-solid fa-plus me-1"></i>
                                    <input type="text" value={0} disabled={true} style={{ textAlign: "center" }} />
                                    <i className="fa-solid fa-minus ms-1"></i>
                                    <i className="fa-solid fa-trash ms-4"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-total">
                        <h3 className="d-flex justify-content-between pt-3 ps-4" style={{ fontWeight: "400" }}>
                            Total : <span className="pe-4">899$</span>
                        </h3>
                        <div className="view-cart">View Cart</div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Header

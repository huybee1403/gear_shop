import React, { useCallback, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import axios from "axios";
import debounce from "lodash/debounce";
import { Link, useNavigate } from "react-router-dom";
import { UseProduct } from "../../../ProductContext/ProductContext";
import { useUser } from "../../../UserContext/UserContext";

const Header = () => {
    // State
    const [resProdct, setResProdct] = useState(true);
    const [result, setResult] = useState([]);
    const [query, setQuery] = useState("");
    const [resMenu, setResMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [user, setUser] = useState(false);
    const [cart, setCart] = useState(false);
    const [isFixed, setIsFixed] = useState(false);
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    // State

    // Context
    const { Product, handleQuantity, handleDelete } = UseProduct();
    const { handleLogout, email } = useUser();
    console.log(email);
    
    // Context

    // Ref
    const refResMenu = useRef();
    const iconResMenu = useRef();
    const iconResSearch = useRef();
    const resSearch = useRef();
    const cartOverlayRef = useRef();
    const iconCart = useRef();
    const iconUser = useRef();
    const userPopup = useRef();
    // Ref

    //Search Real Time
    const fetchResult = async (searchQuery) => {
        if (!searchQuery) setResult([]);
        if (searchQuery) {
            try {
                const response = await axios.get(`https://6717cc55b910c6a6e02a08be.mockapi.io/products/?title=${searchQuery.trim()}`);
                setResult(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const debouncedFetchResults = useCallback(
        debounce((query) => fetchResult(query), 300),
        []
    );

    useEffect(() => {
        debouncedFetchResults(query);
        return () => {
            debouncedFetchResults.cancel();
        };
    }, [query, debouncedFetchResults]);

    const handelSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
        setSearch(false);
    };
    //Search Real Time

    //HandleClickRemoveHover
    const handleClick = () => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1500);
    };
    //HandleClickRemoveHover

    // CLickOutSide
    useEffect(() => {
        const handleClickOut = (e) => {
            //Responsive Menu
            if (refResMenu.current && !refResMenu.current.contains(e.target)) {
                setResMenu(false);
            }
            if (iconResMenu.current && iconResMenu.current.contains(e.target)) {
                setResMenu(true);
            }
            //Responsive Menu

            //Responsive Search PopUp
            if (resSearch.current && !resSearch.current.contains(e.target)) {
                setSearch(false);
                setQuery("");
            }
            if (iconResSearch.current && iconResSearch.current.contains(e.target)) {
                setSearch(true);
            }
            //Responsive Search PopUp

            //Cart Pop Up
            if (cartOverlayRef.current && cartOverlayRef.current.contains(e.target)) {
                setCart(false);
            }
            if (iconCart.current && iconCart.current.contains(e.target)) {
                setCart(true);
            }
            //Cart Pop Up

            //User Pop Up
            if (userPopup.current && !userPopup.current.contains(e.target)) {
                setUser(false);
            }
            if (iconUser.current && iconUser.current.contains(e.target)) {
                setUser(true);
            }
            //User Pop Up
        };
        document.addEventListener("click", handleClickOut);
        return () => {
            document.addEventListener("click", handleClickOut);
        };
    }, []);
    // CLickOutSide

    //Fixed Header
    const handleScroll = () => {
        if (window.scrollY > 800) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    //Fixed Header

    return (
        <>
            <Container fluid className={`header ${isFixed ? "fixed" : ""} pt-3 pb-3 d-flex flex-row align-items-center justify-content-around`}>
                <Link to="/">
                    <div className="logo d-flex">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_white.png?v=1722670258&width=150" alt="" />
                    </div>
                </Link>
                <ul className="menu d-flex gap-5 align-items-center m-0">
                    <Link to="/" style={{ color: "white" }}>
                        <li>Home</li>
                    </Link>
                    <Link to="/product" style={{ color: "white" }}>
                        <li className={`products ${clicked ? "no-hover" : ""}`} onClick={handleClick}>
                            Products
                            <div className="cate-product">
                                <Row className="pt-3 pb-3">
                                    <Col lg={6} className="d-flex align-items-center justify-content-center mt-4 mb-5">
                                        <div
                                            className="product-item"
                                            onClick={() => {
                                                navigate("/category/mouse");
                                            }}
                                        >
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
                                        <div
                                            className="product-item"
                                            onClick={() => {
                                                navigate("/category/keyboard");
                                            }}
                                        >
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
                                        <div
                                            className="product-item"
                                            onClick={() => {
                                                navigate("/category/headphone");
                                            }}
                                        >
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
                                        <div
                                            className="product-item"
                                            onClick={() => {
                                                navigate("/category/console");
                                            }}
                                        >
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
                    <Link to="/contact" style={{ color: "white" }}>
                        <li>Contact Us</li>
                    </Link>
                    <Link to={"/about-us"} style={{ color: "white" }}>
                        <li>About Us</li>
                    </Link>
                </ul>
                <div className="btn-icon">
                    <i className="fa-solid fa-magnifying-glass" ref={iconResSearch}></i>
                    <i ref={iconUser} className="fa-solid fa-user"></i>
                    <i className="fa-solid fa-star" onClick={() => navigate("/wish")}></i>
                    <i className="fa-solid fa-cart-shopping" ref={iconCart}></i>
                    <i ref={iconResMenu} className="fa-solid fa-bars"></i>
                </div>
                <div ref={resSearch} className={`search-popup ${search ? "active" : ""}`}>
                    <form action="" className="search-input" onSubmit={handelSearch}>
                        <input type="text" placeholder="Enter Your Key Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                        <i className="fa-solid fa-magnifying-glass" onClick={handelSearch}></i>
                    </form>
                    <div className="result">
                        {result.map((item) => (
                            <Row className="list-item pt-2 pb-2" key={item.id}>
                                <Col lg={4} className="img-item">
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.img} alt="" />{" "}
                                    </Link>
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
                        <li
                            onClick={() => {
                                navigate("/");
                                setResMenu(false);
                            }}
                        >
                            Home
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
                        <li
                            onClick={() => {
                                navigate("/about-us");
                                setResMenu(false);
                            }}
                        >
                            About Us
                            <span>
                                <i className="fa-solid fa-address-card"></i>
                            </span>
                        </li>
                        <li
                            onClick={() => {
                                navigate("/contact");
                                setResMenu(false);
                            }}
                        >
                            Contact Us
                            <span>
                                <i className="fa-solid fa-address-book"></i>
                            </span>
                        </li>
                        <li>
                            News
                            <span>
                                <i className="fa-solid fa-newspaper"></i>
                            </span>
                        </li>
                    </ul>
                    <ul className={`sub-product p-0 mt-1 ${resProdct ? "" : "active"}`}>
                        <li onClick={() => setResProdct(!resProdct)}>
                            Return
                            <span>
                                <i className="fa-solid fa-arrow-rotate-left"></i>
                            </span>
                        </li>
                        <li
                            onClick={() => {
                                navigate("/category/keyboard");
                                setResMenu(false);
                            }}
                        >
                            Gaming Keyboard
                            <span>
                                <i className="fa-solid fa-keyboard"></i>
                            </span>
                        </li>
                        <li
                            onClick={() => {
                                navigate("/category/mouse");
                                setResMenu(false);
                            }}
                        >
                            Gaming Mouse
                            <span>
                                <i className="fa-solid fa-computer-mouse"></i>
                            </span>
                        </li>
                        <li
                            onClick={() => {
                                navigate("/category/headphone");
                                setResMenu(false);
                            }}
                        >
                            Gaming Headphone
                            <span>
                                <i className="fa-solid fa-headphones"></i>
                            </span>
                        </li>
                        <li
                            onClick={() => {
                                navigate("/category/console");
                                setResMenu(false);
                            }}
                        >
                            Gaming Console
                            <span>
                                <i className="fa-solid fa-gamepad"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={`cart-popup ${cart ? "active" : ""}`}>
                    <div className="top">
                        <div className="top-title">
                            <h6 style={{ color: "black" }}>My Cart: </h6>
                            <span>{Product.length} item</span>
                        </div>
                        <div className="close-btn">
                            <i className="fa-solid fa-xmark" onClick={() => setCart(false)}></i>
                        </div>
                    </div>
                    {Product.length < 1 && (
                        <div className="cart-empty mt-3">
                            <div className="empty-img">
                                <img src="https://nov-gearnix.myshopify.com/cdn/shop/t/2/assets/cart-empty.webp" alt="" />
                            </div>
                            <p className="text-center">Your cart is currently empty.</p>
                            <div className="list-btn mt-3">
                                <Link to="/category/keyboard" onClick={() => setCart(false)} className="btn">
                                    <div>Keyboard</div>
                                </Link>
                                <Link to="/category/mouse" onClick={() => setCart(false)} className="btn">
                                    <div>Mouse</div>
                                </Link>
                                <Link to="/category/headphone" onClick={() => setCart(false)} className="btn">
                                    <div>Headphones</div>
                                </Link>
                                <Link to="/category/console" onClick={() => setCart(false)} className="btn">
                                    <div>Controler</div>
                                </Link>
                            </div>
                        </div>
                    )}
                    {Product.length > 0 && (
                        <div className="none-empty">
                            {Product.map((item) => (
                                <div className="cart-item pt-2 pb-2" key={item.id} id={item.id}>
                                    <div className="cart-img">
                                        <img style={{ width: "150px", height: "150px" }} src={item.img} alt="" />
                                    </div>
                                    <div className="cart-content">
                                        <div className="cart-title mb-2" style={{ fontSize: "14px" }}>
                                            {item.title}
                                        </div>
                                        <div className="cart-price" style={{ color: "red", fontWeight: "500" }}>
                                            {item.sale_check ? ((item.price - (item.price * item.sale_value) / 100) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)} $
                                        </div>
                                        <div className="cart-quantity mt-2 mb-2">
                                            <i className="fa-solid fa-plus me-1" onClick={() => handleQuantity("plus", item.id)}></i>
                                            <input type="text" value={item.quantity} disabled={true} style={{ textAlign: "center" }} />
                                            <i className="fa-solid fa-minus ms-1" onClick={() => handleQuantity("minus", item.id)}></i>
                                            <i className="fa-solid fa-trash ms-4" onClick={() => handleDelete(item.id)}></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-total">
                                <h3 className="d-flex justify-content-between pt-3 ps-4" style={{ fontWeight: "400" }}>
                                    Total :
                                    <span className="me-4" style={{ color: "#e25fa5" }}>
                                        $
                                        {Product.reduce((total, item) => {
                                            const itemTotal = item.sale_check ? (item.price - (item.price * item.sale_value) / 100) * item.quantity : item.price * item.quantity;
                                            return total + itemTotal;
                                        }, 0).toFixed(2)}
                                    </span>
                                </h3>
                                <Link to="/cart-details" onClick={() => setCart(false)}>
                                    <div className="view-cart">View Cart</div>
                                </Link>
                            </div>
                        </div>
                    )}
                    <div ref={cartOverlayRef} className={`cart-overlay ${cart ? "active" : ""}`}></div>
                </div>
                <div ref={userPopup} className={`user-popup ${user ? "active" : ""}`}>
                    <div className="top">
                        <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/Logo_black.png?v=1722670265&width=150" alt="" />
                        <div className="close-btn">
                            <i className="fa-solid fa-xmark" onClick={() => setUser(false)}></i>
                        </div>
                    </div>
                    {email && (
                        <div className="account">
                            <p className="m-0">{email}</p>
                            <div className="logout" onClick={handleLogout}>
                                Logout
                            </div>
                        </div>
                    )}
                    <ul className="list-user">
                        <h5>Customer Account</h5>
                        {!email ? (
                            <li
                                onClick={() => {
                                    navigate("/login");
                                    setUser(false);
                                }}
                            >
                                Login
                            </li>
                        ) : (
                            <li
                                onClick={() => {
                                    navigate("/cart-details");
                                    setUser(false);
                                }}
                            >
                                Your Cart
                            </li>
                        )}
                        <li
                            onClick={() => {
                                navigate("/register");
                                setUser(false);
                            }}
                        >
                            Register
                        </li>
                        <li
                            onClick={() => {
                                navigate("/wish");
                                setUser(false);
                            }}
                        >
                            Wishlist
                        </li>
                        {email && (
                            <li
                                onClick={() => {
                                    navigate("/history");
                                    setUser(false);
                                }}
                            >
                                History Order
                            </li>
                        )}
                        <li
                            onClick={() => {
                                navigate("/checkout");
                                setUser(false);
                            }}
                        >
                            Check Out
                        </li>
                    </ul>
                    <ul className="list-care ">
                        <h5>Customer Care</h5>
                        <li>FAQs</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li
                            onClick={() => {
                                navigate("/contact");
                                setUser(false);
                            }}
                        >
                            Contact Us
                        </li>
                    </ul>
                </div>
            </Container>
        </>
    );
};

export default Header;

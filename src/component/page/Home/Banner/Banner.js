import React, { useEffect, useState } from "react"
import "./Banner.css"
import { Link } from "react-router-dom"
const Banner = () => {
    const [id, setId] = useState(1)
    const handleSlider = (index) => {
        setId(index)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setId(id < 3 ? id + 1 : 1)
        }, 5000)
        return () => clearTimeout(timer)
    }, [id])

    return (
        <div className="slider-container">
            <div className={`slider-item ${id === 1 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-3.jpg?v=1724894834&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Essential Gaming
                        <br />
                        Equipment for Champions
                    </h1>
                    <p className="desc">Gear up with essential equipment designed to elevate your game to championship levels.</p>
                    <Link to="/product">
                        <button className="shop">
                            Shop Now <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={`slider-item ${id === 2 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-2.jpg?v=1724894834&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Equip Yourself with the 
                        <br />
                        Best Gear Available
                    </h1>
                    <p className="desc">Upgrade your game with our premium gear for top performance.</p>
                    <Link to="/product">
                        <button className="shop">
                            Shop Now <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={`slider-item ${id === 3 ? "active" : ""}`}>
                <div className="slider-img">
                    <img src="https://nov-gearnix.myshopify.com/cdn/shop/files/s-6-1.jpg?v=1724894835&width=3840" alt="" />
                </div>
                <div className="slider-content">
                    <h1 className="caption">
                        Redefine Your Gaming
                        <br />
                        Experience with Gear
                    </h1>
                    <p className="desc">Engineered for Uncompromising Performance and Unparalleled Immersion</p>
                    <Link to="/product">
                        <button className="shop">
                            Shop Now <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="list-button">
                <div className={`slider-dot ${id === 1 ? "active" : ""}`} onClick={() => handleSlider(1)}></div>
                <div className={`slider-dot ${id === 2 ? "active" : ""}`} onClick={() => handleSlider(2)}></div>
                <div className={`slider-dot ${id === 3 ? "active" : ""}`} onClick={() => handleSlider(3)}></div>
            </div>
        </div>
    )
}

export default Banner

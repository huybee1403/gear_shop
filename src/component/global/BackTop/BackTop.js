import React, { useEffect, useState } from "react"
import "./BackTop.css"

const BackTop = () => {
    const [showButton, setShowButton] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 800) {
            setShowButton(true)
        } else {
            setShowButton(false)
        }
    }
    const backTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return (
        <div className={`back-to-top ${showButton ? "show" : ""}` } onClick={backTop}>
            <i className="fa-solid fa-arrow-down"></i>
        </div>
    )
}

export default BackTop

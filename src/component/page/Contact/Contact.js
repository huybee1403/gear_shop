import React, { useState } from "react"
import "./Contact.css"
import { Col, Container, Row } from "react-bootstrap"
const Contact = () => {
    const [src, setSrc] =useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.161494334525!2d106.64487127578548!3d10.798940389351149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a0c97a181%3A0x6aece518177f9a92!2sGEARVN%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m!5e0!3m2!1svi!2s!4v1730843871082!5m2!1svi!2s")
    const [indexActive , setIndexActive] = useState(1)
    const handleSet = (index, src) => {
        setIndexActive(index)
        setSrc(src)
    }
    return (
        <Container className="contact-us">
            <div className="top">
                <h1>Contact Us</h1>
                <p>Home - Contact Us</p>
            </div>
            <div className="position" data-aos="zoom-in">
                <iframe
                    src={src}
                    width="100%"
                    height="650"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="infor-contact mt-5">
                <Row>
                    <Col lg={6} data-aos="fade-right">
                        <h1 style={{ color: "white", fontFamily: "Orbitron", fontWeight: "bold" }}>Shop Agency</h1>
                        <ul className="list-agency p-0 mt-4">
                            <li  className={`d-flex ${indexActive === 1 ? 'active' : ''}`} onClick={() => handleSet(1,"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.161494334525!2d106.64487127578548!3d10.798940389351149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a0c97a181%3A0x6aece518177f9a92!2sGEARVN%20Ho%C3%A0ng%20Hoa%20Th%C3%A1m!5e0!3m2!1svi!2s!4v1730843871082!5m2!1svi!2s")}>
                                <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                <span>78-80-82, 82 Hoàng Hoa Thám, Phường 12, Tân Bình, Hồ Chí Minh 700000, Việt Nam</span>
                            </li>
                            <li  className={`d-flex ${indexActive === 2 ? 'active' : ''}`} onClick={() => handleSet(2,"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.75576691597!2d106.67154367578496!3d10.753296889394106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1af0e7aaa9%3A0x6f3b3d55ddbb4754!2zR0VBUlZOIFRy4bqnbiBIxrBuZyDEkOG6oW8!5e0!3m2!1svi!2s!4v1730928362493!5m2!1svi!2s")}>
                                <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                <span> 1083 Đ. Trần Hưng Đạo, Phường 5, Quận 5, Hồ Chí Minh, Việt Nam</span>
                            </li>
                            <li  className={`d-flex ${indexActive === 3 ? 'active' : ''}`} onClick={() => handleSet(3,"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.371510835042!2d106.75682931128789!3d10.859322089249906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527dfdb9a969d%3A0x2733db35aa4da8ff!2zR0VBUlZOIEtoYSBW4bqhbiBDw6Ju!5e0!3m2!1svi!2s!4v1730928289204!5m2!1svi!2s")}>
                                <i className="fa-solid fa-location-dot me-3 mt-1"></i>
                                <span>905 Đ. Kha Vạn Cân, Linh Chiểu, Thủ Đức, Hồ Chí Minh, Việt Nam</span>
                            </li>
                        </ul>
                    </Col>
                    <Col lg={6} data-aos="fade-left">
                        <h1 style={{ color: "white", fontFamily: "Orbitron", fontWeight: "bold" }}>Information</h1>
                        <ul className="infor-contact p-0 mt-4">
                            <li>Emails: support@domain.com</li>
                            <li>Call Us: (012)-345-67890</li>
                            <li>Opening time: Our store has re-opened for shopping, exchanges every day 11am to 7pm</li>
                        </ul>
                        <div className="social mt-3">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitch"></i>
                            <i className="fa-brands fa-discord"></i>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Contact

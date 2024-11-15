import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import "./HistoryOrder.css";
import { useUser } from "../../../UserContext/UserContext";
import useFetch from "../../../Feature/useFetch";
const HistoryOrder = () => {
    const { email } = useUser();
    const [hisData, setHisData] = useState([]);
    const historyOrder = useFetch(`https://6734a5c0a042ab85d11b11ec.mockapi.io/list-oder?email_Account=${email}`);
    useEffect(() => {
        setHisData(historyOrder);
    }, [historyOrder]);
    console.log(hisData);

    return (
        <Container className="history-order">
            <div className="top">
                <h1>History Order</h1>
                <p>Home - History Order</p>
            </div>
            <div className="h3" style={{ color: "white" }}>
                Account: {email}
            </div>
            <Col md={12} className="history-list" style={historyOrder === 0 ? { display: "none" } : { display: "block" }} data-aos="zoom-in">
                {hisData &&
                    hisData.map((item) => (
                        <div className="history-item" key={item.id} id={item.id}>
                            <div className="history-time ms-2">Time: {item.createdAt}</div>
                            <div className="history-email mt-2 ms-2">Email Order: {item.email_Order}</div>
                            <div className="history-account mt-2 ms-2">Email Account: {item.email_Account}</div>
                            {item.history.map((item) => (
                                <div className="history-img">
                                    <img src={item.img} alt="" />
                                    <p className="text-center" style={{ width: "320px" }}>
                                        {item.title}
                                    </p>
                                    <p>Price: {item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total: ${item.sale_check ? (item.price - (item.price * item.sale_value * item.quantity) / 100).toFixed(2) : (item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                            <div className="history-price"></div>
                        </div>
                    ))}
            </Col>
        </Container>
    );
};

export default HistoryOrder;

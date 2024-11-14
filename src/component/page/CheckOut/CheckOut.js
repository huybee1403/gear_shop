import React, { useEffect, useRef, useState } from "react";
import "./CheckOut.css";
import { Col, Container, Row } from "react-bootstrap";
import { UseProduct } from "../../../ProductContext/ProductContext";
import { useFormik } from "formik";
import useFetch from "../../../Feature/useFetch";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useUser } from "../../../UserContext/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid"; // Import v4 để tạo UUID ngẫu nhiên

const CheckOut = () => {
    const form = useRef();
    const navigate = useNavigate();
    const { Product } = UseProduct();
    const { email } = useUser();
    const [orderId, setOrderId] = useState("");
    const createOrderId = () => {
        const newOrderId = uuidv4(); // Tạo mã đơn hàng UUID mới
        setOrderId(newOrderId); // Cập nhật mã đơn hàng vào state
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            phone: "",
            emails: "",
            address: "",
            city: "",
            district: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string().required("Your Name Is Empty"),
            phone: Yup.string()
                .matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Phone Number Is Not Vaild")
                .required("Your Phone Is Empty"),
            emails: Yup.string().email("Email Is Not Vaild").required("Your Email Is Empty"),
            address: Yup.string().required("Your Addres Is Empty"),
        }),
        onSubmit: async (values) => {
            emailjs.sendForm("service_bc6cbtn", "template_0v28vpp", form.current, "qkhQdR9ANS0XLE0D4").then(
                (result) => {
                    console.log("Email sent successfully:", result);
                    toast.success("Oder Success");
                    navigate("/product");
                    window.location.reload();
                },
                (error) => {
                    console.log("Failed to send email:", error);
                    toast.success("Error For Order");
                }
            );
            postData(values);
            handlePostOrder();
        },
    });

    //History-Order
    const handlePostOrder = async () => {
        if (email) {
            try {
                const reponse = await axios.post("https://6734a5c0a042ab85d11b11ec.mockapi.io/list-oder", {
                    email_Account: email,
                    email_Order: formik.values.emails,
                    history: [...Product],
                });
                alert("Data Created Successfully");
            } catch (error) {
                console.log(error);
            }
        } else {
            localStorage.removeItem("Product");
        }
    };
    //History-Order

    //GoogleSheet
    const postData = async (data) => {
        const formData = new FormData();
        formData.append("entry.657229550", orderId);
        formData.append("entry.1569401845", data.fullname);
        formData.append("entry.630370392", data.phone);
        formData.append("entry.586234339", data.emails);
        formData.append("entry.5488180", data.address);

        formData.append("entry.1484802816", JSON.stringify(Product));
        fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSdRZhxdAfh3LcPN3R8wyxNeLdYgMtq-OBgQJF0Ra-ngYmF45w/formResponse", { method: "POST", body: formData, mode: "no-cors" });
    };
    //GoogleSheet

    // // VNPay
    // const VNP_TMN_CODE = "Y1TEA8V5"; // Mã thương nhân (Merchant ID)
    // const HASH_SECRET = "DEHVC30RXRA1KPFTCPZQ6NJOZX89SITX"; // Khóa bí mật mà VNPAY cung cấp
    // const VNPAY_URL = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"; // URL thanh toán VNPAY Sandbox

    // const createVnPayUrl = (orderInfo, totalDiscount) => {
    //     const vnp_Params = new URLSearchParams();

    //     const txnRef = Date.now(); // Sử dụng thời gian để tạo số tham chiếu đơn hàng
    //     vnp_Params.append("vnp_TxnRef", txnRef.toString()); // Mã giao dịch
    //     vnp_Params.append("vnp_OrderInfo", "Mua san pam"); // Thông tin đơn hàng
    //     vnp_Params.append("vnp_Amount", (2000000 * 24000).toString()); // VNPay yêu cầu số tiền theo đơn vị đồng (VND)
    //     vnp_Params.append("vnp_CurrCode", "VND"); // Mã tiền tệ
    //     vnp_Params.append("vnp_Locale", "vn"); // Ngôn ngữ: vn hoặc en
    //     vnp_Params.append("vnp_BankCode", ""); // Mã ngân hàng (có thể để trống)

    //     const returnUrl = "http://localhost:3000/return"; // URL trả về sau khi thanh toán xong
    //     vnp_Params.append("vnp_ReturnUrl", returnUrl);

    //     // Thêm thời gian tạo đơn
    //     const createDate = new Date().toISOString().replace(/[-T:.Z]/g, ""); // Định dạng lại thời gian
    //     vnp_Params.append("vnp_CreateDate", createDate); // Tạo mã bảo mật (SecureHash)
    //     const secureHash = createSecureHash(vnp_Params);
    //     vnp_Params.append("vnp_SecureHash", secureHash);

    //     console.log(vnp_Params.toString());

    //     // // Tạo URL thanh toán VNPay
    //         const vnpUrl = `${VNPAY_URL}?${vnp_Params.toString()}`;

    //         // Chuyển hướng người dùng đến VNPay để thanh toán
    //         window.location.href = vnpUrl;
    // };

    // // Hàm tạo SecureHash
    // const createSecureHash = (vnp_Params) => {
    //     // Sắp xếp các tham số theo thứ tự bảng chữ cái
    //     const sortedParams = Array.from(vnp_Params.entries())
    //         .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    //         .map(([key, value]) => `${key}=${value}`)
    //         .join("&"); // Tạo chuỗi ký và mã hóa bằng SHA512 (kết hợp với HASH_SECRET)
    //     const signData = HASH_SECRET + sortedParams;
    //     const hash = CryptoJS.SHA512(signData).toString(CryptoJS.enc.Hex); // Sử dụng SHA512
    //     return hash;
    // };
    // const handleVNPayClick = () => {
    //     // Gọi createVnPayUrl khi người dùng chọn thanh toán qua VNPay
    //     createVnPayUrl("Mua sắm sản phẩm", totalDiscount); // Pass thông tin đơn hàng và tổng tiền thanh toán
    // };
    // //VNPay

    //State
    const [payMent, setPayMent] = useState("cod");
    const [dataCity, setDataCity] = useState([]);
    const [selecteCity, setSelecteCity] = useState(1);
    const [dataDistrict, setDataDistrict] = useState([]);
    const city = useFetch("https://esgoo.net/api-tinhthanh/1/0.htm");
    const district = useFetch(`https://esgoo.net/api-tinhthanh/2/${selecteCity}.htm`);

    useEffect(() => {
        if (city) {
            setDataCity(city.data);
        }
        if (district) {
            setDataDistrict(district.data);
        }
        setSelecteCity(formik.values.city);
    }, [city, selecteCity, formik.values.city, district]);
    //State

    const handlePay = (e) => {
        setPayMent(e.target.value);
    };

    const total = Product.reduce((total, item) => {
        const itemTotal = item.sale_check ? (item.price - (item.price * item.sale_value) / 100) * item.quantity : item.price * item.quantity;
        return total + itemTotal;
    }, 0);

    const totalDiscount = total > 900.0 ? total - total * 0.2 : total;

    return (
        <Container className="check-out">
            <div className="top">
                <h1>Check Out</h1>
                <p>Home - Check Out</p>
            </div>
            <Row>
                {Product.length > 0 && (
                    <Col lg={6} md={12} className="order-form" data-aos="zoom-in">
                        <form ref={form} onSubmit={formik.handleSubmit}>
                            <h3>Contact</h3>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" name="fullname" placeholder="Full Name" value={formik.values.fullname} onChange={formik.handleChange} />
                            {formik.touched.fullname && formik.errors.fullname ? <div className="error">{formik.errors.fullname}</div> : null}

                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" id="phone" name="phone" placeholder="Your Phone Number" value={formik.values.phone} onChange={formik.handleChange} />
                            {formik.touched.phone && formik.errors.phone ? <div className="error">{formik.errors.phone}</div> : null}

                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="emails" placeholder="Email" value={formik.values.emails} onChange={formik.handleChange} />
                            {formik.touched.emails && formik.errors.emails ? <div className="error">{formik.errors.emails}</div> : null}

                            <label htmlFor="address">Address</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" value={formik.values.address} onChange={formik.handleChange} />
                            {formik.touched.address && formik.errors.address ? <div className="error">{formik.errors.address}</div> : null}

                            <label htmlFor="city">Town / City</label>
                            <select name="city" id="city" onChange={formik.handleChange}>
                                <option value="">Chosse Your City</option>
                                {dataCity &&
                                    dataCity.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.name_en}
                                        </option>
                                    ))}
                            </select>

                            <label htmlFor="district">District</label>
                            <select name="district" id="district" onChange={formik.handleChange}>
                                <option value="">Chosse Your District</option>
                                {dataDistrict &&
                                    dataDistrict.map((item) => (
                                        <option value={item.id} key={item.id}>
                                            {item.name_en}
                                        </option>
                                    ))}
                            </select>

                            <div className="pay-method">
                                <h2>Payment Method</h2>
                                <div className="cod-method mt-3">
                                    <div className="left-cod">
                                        <input type="radio" name="pay" checked={payMent === "cod"} onChange={handlePay} value="cod" />
                                    </div>
                                    <div className="right-cod">
                                        <i className="fa-solid fa-truck-fast me-2"></i>
                                        COD Payment on delivery
                                    </div>
                                </div>
                                <div className="atm-method mt-3">
                                    <div className="left-atm">
                                        <input type="radio" name="pay" checked={payMent === "atm"} onChange={handlePay} value="atm" />
                                    </div>
                                    <div className="right-atm">
                                        <i className="fa-solid fa-money-check me-2"></i>
                                        ATM BANKING
                                    </div>
                                </div>
                            </div>
                            {payMent === "cod" ? (
                                <button type="submit" className="order-now mt-5" onClick={createOrderId}>
                                    Order Now
                                </button>
                            ) : (
                                <div className="atm-pay mt-5">
                                    <img src="https://stcd02206177151.cloud.edgevnpay.vn/assets/images/logo-icon/logo-primary.svg" alt="" />
                                </div>
                            )}
                        </form>
                    </Col>
                )}

                <Col lg={Product.length >= 1 ? 6 : 12} md={12} className="product-check" data-aos="zoom-in">
                    <h2>Your Product</h2>
                    {Product.length < 1 && (
                        <div className="empty-product">
                            <div className="empty-image d-flex justify-content-center">
                                <img style={Product.length < 1 && { width: "50%" }} src="https://nov-gearnix.myshopify.com/cdn/shop/t/2/assets/cart-empty.webp" alt="" />
                            </div>
                        </div>
                    )}
                    {Product.length >= 1 && (
                        <div className="list-check">
                            {Product.map((item, index) => (
                                <div className="check-item" key={item.id} id={item.id}>
                                    <div className="check-id">Product {index + 1}</div>
                                    <div className="check-img">
                                        <img src={item.img} alt="" />
                                        <p>{item.title}</p>
                                        <span className="check-qtn">{item.quantity}</span>
                                    </div>
                                    <div className="check-price">
                                        <p>${item.sale_check ? ((item.price - (item.price * item.sale_value) / 100) * item.quantity).toFixed(2) : (item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <h2 className="total-check mt-4">
                        Total: <span style={{ color: "#cf6cc9" }}>${totalDiscount.toFixed(2)}</span>
                    </h2>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckOut;

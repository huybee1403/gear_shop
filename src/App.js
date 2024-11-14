import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./App.css";
import Home from "./component/page/Home/Home";
import { Route, Routes } from "react-router-dom";
import ListProduct from "./component/page/ListProduct/ListProduct";
import Footer from "./component/global/Footer/Footer";
import Header from "./component/global/Header/Header";
import { useEffect } from "react";
import BackTop from "./component/global/BackTop/BackTop";
import AboutUs from "./component/page/AboutUs/AboutUs";
import Search from "./component/page/Search/Search";
import Details from "./component/page/Details/Details";
import Contact from "./component/page/Contact/Contact";
import CartDetails from "./component/page/CartDetails/CartDetails";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckOut from "./component/page/CheckOut/CheckOut";
import New from "./component/page/News/New";
import Login from "./component/page/Login/Login";
import Register from "./component/page/Register/Register";
import WishList from "./component/page/WishList/WishList";
import HistoryOrder from "./component/page/HistoryOder/HistoryOrder";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500,
            delay: 300,
            once: false,
        });
    }, []);

    return (
        <>
            <BackTop></BackTop>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
                <Route path="/product" element={<ListProduct></ListProduct>}></Route>
                <Route path="/category/:slug" element={<ListProduct></ListProduct>}></Route>
                <Route path="/search/:slug" element={<Search></Search>}></Route>
                <Route path="/details/:slug" element={<Details></Details>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/cart-details" element={<CartDetails></CartDetails>}></Route>
                <Route path="/wish" element={<WishList></WishList>}></Route>
                <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
                <Route path="/new/:slug" element={<New></New>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/history" element={<HistoryOrder></HistoryOrder>}></Route>
            </Routes>
            <ToastContainer position="top-center" autoClose={1000} transition={Slide} pauseOnHover={false} />
            <Footer></Footer>
        </>
    );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "aos/dist/aos.css"
import "./App.css"
import Home from "./component/page/Home/Home"
import { Route, Routes } from "react-router-dom"
import ListProduct from "./component/page/ListProduct/ListProduct"
import Footer from "./component/global/Footer/Footer"

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/product" element={<ListProduct></ListProduct>}></Route>
            </Routes>{" "}
            <Footer></Footer>
        </>
    )
}

export default App

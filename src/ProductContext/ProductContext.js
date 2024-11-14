import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [Product, setProduct] = useState(localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : []);
    const [recentView, setRecentView] = useState(localStorage.getItem("recentlyView") ? JSON.parse(localStorage.getItem("recentlyView")) : []);
    const [wishList, setWishList] = useState(localStorage.getItem("Wish_List") ? JSON.parse(localStorage.getItem("Wish_List")) : []);
    const handleAddProduct = (product) => {
        const newProduct = [...Product];
        const checkIndex = Product.findIndex((item) => item.id === product.id);
        if (checkIndex >= 0) {
            newProduct[checkIndex].quantity++;
        } else {
            product.quantity = 1;
            newProduct.push(product);
        }
        setProduct(newProduct);
        localStorage.setItem("Product", JSON.stringify(newProduct));
        toast.success("Add Item To Cart Successfully");
    };
    const handleQuantity = (type, id) => {
        const newProduct = [...Product];
        const checkIndex = Product.findIndex((item) => item.id === id);
        if (type === "plus") {
            newProduct[checkIndex].quantity++;
        } else if (type === "minus") {
            newProduct[checkIndex].quantity--;
            if (newProduct[checkIndex].quantity < 1) {
                newProduct.splice(checkIndex, 1);
            }
        }
        setProduct(newProduct);
        localStorage.setItem("Product", JSON.stringify(newProduct));
    };
    const handleDelete = (id) => {
        const newProduct = [...Product];
        newProduct.splice(
            newProduct.findIndex((item) => item.id === id),
            1
        );
        setProduct(newProduct);
        localStorage.setItem("Product", JSON.stringify(newProduct));
        toast.success("Remove Item From Cart Successfully");
    };
    const addRecentProduct = (recentProduct) => {
        const newRecentView = [...recentView];
        if (!newRecentView.some((p) => p.id === recentProduct.id)) {
            newRecentView.push(recentProduct);
        }
        if (newRecentView.length > 5) {
            newRecentView.shift();
        }
        localStorage.setItem("recentlyView", JSON.stringify(newRecentView));
        setRecentView(newRecentView);
    };

    const handleAddWish = (product) => {
        const newWish = [...wishList];
        const checkIndex = wishList.findIndex((item) => item.id === product.id);
        if (checkIndex >= 0) {
            newWish[checkIndex].quantity++;
        } else {
            product.quantity = 1;
            newWish.push(product);
        }
        setWishList(newWish);
        localStorage.setItem("Wish_List", JSON.stringify(newWish));
        toast.success("Add Item To Wish List Successfully");
    };
    const handleDeleteWish = (id) => {
        const newWish = [...wishList];
        newWish.splice(
            newWish.findIndex((item) => item.id === id),
            1
        );
        setWishList(newWish);
        localStorage.setItem("Wish_List", JSON.stringify(newWish));
        toast.success("Remove Item Wish List Successfully");
    };
    return (
        <ProductContext.Provider value={{ Product, handleAddProduct, handleQuantity, handleDelete, addRecentProduct, recentView, wishList, handleAddWish, handleDeleteWish }}>
            {children}
        </ProductContext.Provider>
    );
};

const UseProduct = () => {
    return useContext(ProductContext);
};

export { ProductProvider, UseProduct };

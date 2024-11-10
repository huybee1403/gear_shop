import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [Product, setProduct] = useState(localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : [])
    const [recentView, setRecentView] = useState(localStorage.getItem("recentlyView") ? JSON.parse(localStorage.getItem("recentlyView")) : [])
    const handleAddProduct = (product) => {
        const newProduct = [...Product]
        const checkIndex = Product.findIndex((item) => item.id === product.id)
        if (checkIndex >= 0) {
            newProduct[checkIndex].quantity++
        } else {
            product.quantity = 1
            newProduct.push(product)
        }
        setProduct(newProduct)
        localStorage.setItem("Product", JSON.stringify(newProduct))
    }
    const handleQuantity = (type, id) => {
        const newProduct = [...Product]
        const checkIndex = Product.findIndex((item) => item.id === id)
        if (type === "plus") {
            newProduct[checkIndex].quantity++
        } else if (type === "minus") {
            newProduct[checkIndex].quantity--
            if (newProduct[checkIndex].quantity < 1) {
                newProduct.splice(checkIndex, 1)
            }
        }
        setProduct(newProduct)
        localStorage.setItem("Product", JSON.stringify(newProduct))
    }
    const handleDelete = (id) => {
        const newProduct = [...Product]
        newProduct.splice(
            newProduct.findIndex((item) => item.id === id),
            1
        )
        setProduct(newProduct)
        localStorage.setItem("Product", JSON.stringify(newProduct))
    }
    const addRecentProduct = (recentProduct) => {
        const newRecentView = [...recentView]
        if (!newRecentView.some((p) => p.id === recentProduct.id)) {
            newRecentView.push(recentProduct)
        }
        if (newRecentView.length > 5) {
            newRecentView.shift()
        }
        localStorage.setItem("recentlyView", JSON.stringify(newRecentView))
        setRecentView(newRecentView)
    }

    return <ProductContext.Provider value={{ Product, handleAddProduct, handleQuantity, handleDelete, addRecentProduct, recentView }}>{children}</ProductContext.Provider>
}

const UseProduct = () => {
    return useContext(ProductContext)
}

export { ProductProvider, UseProduct }

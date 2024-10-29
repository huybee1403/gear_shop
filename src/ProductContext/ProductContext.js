import { createContext, useContext, useState } from "react"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [Product, setProduct] = useState(localStorage.getItem("Product") ? JSON.parse(localStorage.getItem("Product")) : [])
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

    return <ProductContext.Provider value={{ Product, handleAddProduct }}>{children}</ProductContext.Provider>
}

const UseProduct = () => {
    return useContext(ProductContext)
}

export { ProductProvider, UseProduct }

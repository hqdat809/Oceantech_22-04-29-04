import { useState, createContext, useEffect } from 'react'

const ProductContext = createContext()

function ProductProvider({ children }) {

    const [allProduct, setAllProduct] = useState([])
    const [categories, setCategories] = useState([])


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setAllProduct(json) })
    }, [])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => { setCategories(json) })
    }, [])



    function filterByCategory(category) {
        return allProduct.filter(
            (product) => (product.category.toLowerCase() === category.toLowerCase())
        )
    }

    function getProductById(id) {
        return allProduct.find((product) => product.id === id)
    }

    const value = {
        allProduct,
        filterByCategory,
        getProductById,
        categories
    }
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }
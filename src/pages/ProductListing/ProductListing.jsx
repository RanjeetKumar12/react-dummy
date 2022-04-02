import React from 'react'
import { ProductsPage, ProductCard, Header } from '../../components'
const ProductListing = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="pd-container">
                    <ProductsPage />
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductListing
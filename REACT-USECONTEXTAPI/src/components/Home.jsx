
import React, { useState } from 'react'
import data from "./products.json";
import "./Home.css";
import { Product } from "./Product.jsx"

export const Home = () => {
    const [products] = useState(data);

    return (
        <div className="product-container">
            {products.map((product) => (
                <Product key={product.id} product={product} />
                
            ))}
        </div>
    );
};

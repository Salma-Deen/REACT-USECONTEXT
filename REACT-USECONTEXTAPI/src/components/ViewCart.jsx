/* eslint-disable no-unused-vars */

import React, { useState, useEffect, useContext } from "react";
import "./viewCart.css";

import { cartContext } from "../App";

export const ViewCart = () => {  // Capitalized component name

    const { cart } = useContext(cartContext);

    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.price), 0));  // Used parseFloat for decimal prices
    }, [cart]);

    return (
        <>
            <h1 className="cart-heading">My Cart</h1>
            <div className="cart-container">
                {cart.map((product) => (
                    <div className="cart-product" key={product.id}>
                        <div className="img">
                            <img src={product.image} alt={product.name} /> {/* Added alt description */}
                        </div>
                        <div className="cart-product-details">
                            <h3>{product.name}</h3>
                            <p>Price Rs: {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="cart-amt">Total Amount Rs: {total.toFixed(2)}</h2> {/* Format total with 2 decimal places */}
        </>
    );
};

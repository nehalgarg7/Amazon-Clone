import React from 'react'
import "./Product.css"
function Product () {
    return (
        <div className="product">
            <div className="product-information">
                <p>The lean startup</p>
                <p className="price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="rating">
                    *
                </div>
            </div>
            <img src="https://m.media-amazon.com/images/I/71UlEDZPiCL._SL1500_.jpg" alt="" />

            <button>Add to Basket</button>
        </div>
    )
}
export default Product
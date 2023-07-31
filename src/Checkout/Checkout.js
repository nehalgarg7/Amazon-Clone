import React from 'react'
import "./checkout.css"
import Subtotal from './Subtotal'

export default function () {
  return (
    <div className='checkout'>
        <div className="left">
            <img src="" alt="" className="ad" />

            <div>
                <h2 className="checkout-title">
                    Shopping Cart
                </h2>


                {/*BasketItem*/}
            </div>
        </div>
        <div className="right">
            
            <Subtotal />
        </div>
    </div>
  )
}

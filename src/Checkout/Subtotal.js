import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
  return (
    <div className='subtotal'>
        <CurrencyFormat 
        renderText={(value) => (
            <>
            <p>
                {/**Part of the homework */}
                Subtotal (0 items):
                <strong>0</strong>
            </p>
            <small className="subtotal_gift">
                <input type="text" className="checkbox" />
                <br></br>This order contains a gift
            </small>
            </>
  )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />

        <button id="btn-checkout">Proceed to Buy</button>
    </div>
  )
}

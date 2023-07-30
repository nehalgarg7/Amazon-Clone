import React from "react";
import Product from "../Product/Product";
import "./Main.css"

function Main(){
    return(
        <div className="main">
            <div className="main-banner">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/AugART23_T2_PC_Header_EN_UNREC.jpg" alt="" />
            </div>
            <div className="main-row">
                <Product title={'The lean starting'} price={29.99} image={'https://m.media-amazon.com/images/I/71UlEDZPiCL._SL1500_.jpg'} rating={5}/>
                <Product />
            </div>
            <div className="main-row">
                <Product />
                <Product />
                <Product />
            </div>
            <div className="main-row">
                <Product />
            </div>
        </div>
    )
}

export default Main
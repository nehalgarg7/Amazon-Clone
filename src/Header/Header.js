import React from "react";
import "./Header.css"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <div className="navbar">
            <div className="navbarUp">
                <div className="navbarUp-left">
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" id="logo" />
                </div>
                <div className="navbarUp-middle">
                        <input type="text" name="" id="search" placeholder="Search Amazon.in"/>
                </div>
                <div className="navbarUp-right">
                    <div className="singin">Signin</div>
                    <div className="return-orders">
                        <span className="return">Return</span>
                        <span className="orders">Orders</span>
                    </div>
                    <div className="cart">Cart</div>
                </div>
            </div>
            <div className="navbarDown">
                <div className="navbarDown-left"><span className="all">ALL</span></div>
                <div className="navbarDown-middle">
                    <ul>
                        <li className="items">Amazon miniTV</li>
                        <li className="items">Sell</li>
                        <li className="items">Best Sellers</li>
                        <li className="items">Today's Deals</li>
                        <li className="items">Mobiles</li>
                    </ul>
                </div>
                <div className="navbarDown-right">
                    <img src="https://m.media-amazon.com/images/G/31/IN-hq/2021/img/Mobile_Traffic_/XCM_Manual_1321458_1651511_IN_3781247_400x39_en_IN._CB655944656_.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header
import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer-top"> <p>Back to top</p></div>
            <div className="footer-firstmain">
                <div className="container">
                    <ul>
                        <li><a href="/"><strong>Get to know Us</strong></a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Careers</a></li>
                        <li><a href="/">Press Releases</a></li>
                        <li><a href="/">Amazon Science</a></li>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <li><a href="/"><strong>Connect with Us</strong></a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <li><strong>Make Money with Us</strong></li>
                        <li><a href="/">Sell on Amazon</a></li>
                        <li><a href="/">Sell under Amazon Accelerator</a></li>
                        <li><a href="/">Protect and Build Your Brand</a></li>
                        <li><a href="/">Amazon Global Selling</a></li>
                        <li><a href="/">Become an Affiliate</a></li>
                        <li><a href="/">Fulfilment by Amazon</a></li>
                        <li><a href="/">Advertise Your Products</a></li>
                        <li><a href="/">Amazon Pay on Merchants</a></li>
                    </ul>
                </div>
                <div className="container">
                    <ul>
                        <li><a href="/"><strong>Let Us Help You</strong></a></li>
                        <li><a href="/">COVID-19 and Amazon</a></li>
                        <li><a href="/">Your Account</a></li>
                        <li><a href="/">Returns Centre</a></li>
                        <li><a href="/">100% Purchase Protection</a></li>
                        <li><a href="/">Amazon App Download</a></li>
                        <li><a href="/">Help</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-secondmain">
                <div className="logo">
                    <img src="" alt="Amazon-Logo" />
                </div>
            </div>
            <div className="footer-bottom">
                <div>
                    <span><a href="/">Conditions of Use & Sale</a></span>
                    <span><a href="/">Privacy Notice</a></span>
                    <span><a href="/">Interest-Based Ads</a></span>
                </div>
                <p>
                © 1996-2023, Amazon.com, Inc. or its affiliates
                </p>
            </div>
        </div>
    )
}

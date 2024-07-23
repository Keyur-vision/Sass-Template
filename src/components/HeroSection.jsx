import React, { Fragment } from 'react'
import "../styles/component/HeroSection.css"
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";


function HeroSection() {
    return (
        <Fragment>
            <div className='hero-img'>
                <div className="container">
                    <div className="hero-text d-flex align-items-center">
                        <div className='hero-headings'>
                            <h2>Baby  Accessories</h2>
                            <div className='headings-space'>
                                <h2 className='blue-color'>Nanny agency</h2></div>
                            <div className='hero-contact d-flex align-items-center'>
                                <div className='hero-btn'>
                                    <a href="#btn">Read More</a>
                                </div>
                                <div className='contact-number d-flex justify-content-center align-items-center'>
                                    <HiOutlineDevicePhoneMobile className='mobile-icon' />
                                    <h3>+1 234 567 8910</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default HeroSection
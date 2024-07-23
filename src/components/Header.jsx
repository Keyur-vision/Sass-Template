import React, { Fragment } from 'react'
import elephant from "../assets/images/elephant.png"
import "../styles/component/Header.css"
import { PiShoppingCartLight } from "react-icons/pi";// import "../styles/component/all.min.css"

function Header() {
    return (
        <Fragment>
            <header className='bg-white'>
                <div className="container">
                    <div className="row">
                        <div className='main-header  d-flex align-items-center  justify-content-between'>
                            <div className=' d-flex align-items-center p-1 '>
                                <div className='main-logo'>
                                    <img src={elephant} alt="elephant" />
                                </div>
                                <div className='main-heading text-center'>
                                    <p>M4</p>
                                    <h1>KIDS</h1>
                                </div>
                            </div>
                            <div className='header-items'>
                                <ul className='header-data d-flex align-items-center'>
                                    <li>
                                        <a href="#home">Home</a>
                                    </li>
                                    <li>
                                        <a href="#home">Live DEMO +</a>
                                    </li>
                                    <li>
                                        <a href="#home">Live DEMO BLOCKS +</a>
                                    </li>
                                    <li>
                                        <a href="#home">BUY NOW</a>
                                    </li>
                                </ul>
                            </div>

                            <div className='header-icon'>
                                <div className="header-cart-icon">
                                    <PiShoppingCartLight />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}

export default Header
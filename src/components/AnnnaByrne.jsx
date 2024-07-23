import React, { Fragment } from 'react'
import "../styles/component/AnnnaByrne.css"
import family from "../assets/images/family1.jpg"
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function AnnnaByrne() {
    return (
        <Fragment>
            <div className="anna-section">
                <div className="container">
                    <div className="row anna-border">
                        <div className="col anna-col">
                            <div className="anna-subcol d-flex justify-content-center">
                                <div className='anna-img'>
                                    <img src={family} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col anna-col d-flex align-items-center">
                            <div className="anna-subcol anna-text">
                                <h2>Anna Byrne</h2>
                                <h4>Full-Time Nanny</h4>
                                <ul className='anna-data'>
                                    <li><h5>Exprerience : </h5> <span> 12 Years </span></li>
                                    <li><h5>E-mail : </h5> <span> support@mobirise.com </span></li>
                                    <li><h5>Phone : </h5> <span> +123 456 789 </span></li>
                                    <li><h5>Flax : </h5> <span> +123 456 789  </span></li>
                                    <li>
                                        <ul className='anna-icons d-flex '>
                                            <li> <a href="twitter" className='text-white twitter'><FaTwitter /></a></li>
                                            <li> <a href="twitter" className='text-white facebook'><FaFacebookF /></a></li>
                                            <li> <a href="twitter" className='text-white youtube'><FaYoutube /></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default AnnnaByrne
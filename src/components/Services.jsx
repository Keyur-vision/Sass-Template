import React, { Fragment } from 'react'
import ".././styles/component/Services.css"
import father2 from "../assets/images/father2.jpg"

function Services() {
    return (
        <Fragment>
            <div className="services">
                <div className="container">
                    <div className="row">
                        <div className=" col services-col">
                            <div className="services-subcol">
                                <div className='services-img' >
                                    <img src={father2} alt="baby-img" />
                                </div>
                                <div className='services-popup text-center'>
                                    <div className='services-data'>
                                        <h2 className='text-white text-center'>Happy Hours </h2>
                                        <p className='text-white'>Mon - Fri : 8am - 7pm</p>
                                        <p className='text-white'>Saturday : 9am - 4pm</p>
                                        <p className='text-white'>Sunday : close</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col  services-col services-col-two d-flex align-items-center">
                            <div className="services-subcol">
                                <div className='services-text sub-headings '>
                                    <div><h2 className='services-heading-one'> Nanny Services </h2></div>
                                    <h2 className='services-heading-two'> Evening Nanny </h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam obcaecati velit esse enim.</p>

                                    <div className='services-btn'>
                                        <a href="#btn">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Services
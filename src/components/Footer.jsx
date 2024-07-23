import React, { Fragment } from 'react'
import "../styles/component/Footer.css"

function Footer() {
    return (
        <Fragment>
            <div className="main-footer">
                <div className="footer">
                    <div class="custom-shape-divider-top-1716792674">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className='footer-text'> @ Copyright 2019 <a href="#">Mobirise</a> - All Rights Reserved</div>

                <div className="footer">
                    <div class="custom-shape-divider-top-1716794121">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z" class="shape-fill"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
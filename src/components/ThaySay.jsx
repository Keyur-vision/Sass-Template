import React, { Fragment } from 'react'
import styles from "../styles/component/ThaySay.module.css"
import { FaQuoteLeft } from "react-icons/fa";
import familyone from "../assets/images/family1.jpg"
import familytwo from "../assets/images/family2.jpg"
import familythree from "../assets/images/family3.jpg"

function ThaySay() {
    return (
        <Fragment>
            <div className={styles.theySay}>
                <div className="container">
                    <div className='sub-headings text-center'><h2>  Thay Say </h2></div>
                    <div className='d-flex justify-content-center'  > <p className={styles.theySayText} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illo dignissimos eos natus minus enim ad officiis, cumque, porro rerum omnis ratione,</p></div>

                    <div className="row">
                        <div className={`${styles.theycol}  col`} >
                            <div className={styles.subcol}>
                                <div className={styles.theySayData}>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis earum quae doloremque quibusdam similique non a repudiandae quo tenetur quos.
                                        <span className={styles.theySayIcon}><FaQuoteLeft /></span>
                                    </p>
                                </div>
                                <div className={styles.thetSayTextEnd}>
                                    <div className={styles.theySayAllText}>
                                        <div className={styles.thetSayImg}>
                                            <img src={familyone} alt="family1" />
                                        </div>
                                        <div className={styles.theySayName}>
                                            <h5>Anna Byrne</h5>
                                            <p>Nanny</p>
                                        </div>
                                        <div className={`${styles.theySayCircle} ${styles.theySaypinkColor}`}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.theycol}  col`} >
                            <div className={styles.subcol}>
                                <div className={`${styles.theySayData} , ${styles.theySayBlueColor}`}>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis earum quae doloremque quibusdam similique non a repudiandae quo tenetur quos.
                                        <span className={styles.theySayIcon}><FaQuoteLeft /></span>
                                    </p>
                                </div>
                                <div className={styles.thetSayTextEnd}>
                                    <div className={styles.theySayAllText}>
                                        <div className={styles.thetSayImg}>
                                            <img src={familytwo} alt="family1" />
                                        </div>
                                        <div className={styles.theySayName}>
                                            <h5>Anna Byrne</h5>
                                            <p>Nanny</p>
                                        </div>
                                        <div className={`${styles.theySayCircle} ${styles.theySayBlueColor}`}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.theycol}  col`} >
                            <div className={styles.subcol}>
                                <div className={`${styles.theySayData} , ${styles.theySayYellowColor}`}>
                                    <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis earum quae doloremque quibusdam similique non a repudiandae quo tenetur quos.
                                        <span className={styles.theySayIcon}><FaQuoteLeft /></span>
                                    </p>
                                </div>
                                <div className={styles.thetSayTextEnd}>
                                    <div className={styles.theySayAllText}>
                                        <div className={styles.thetSayImg}>
                                            <img src={familythree} alt="family1" />
                                        </div>
                                        <div className={styles.theySayName}>
                                            <h5>Anna Byrne</h5>
                                            <p>Nanny</p>
                                        </div>
                                        <div className={`${styles.theySayCircle} ${styles.theySayYellowColor}`}>
                                        </div>
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

export default ThaySay
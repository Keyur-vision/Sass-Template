import React, { Fragment } from 'react'
import styles from "../styles/component/MeetOurNannies.module.css"
import babytwo from "../assets/images/baby2.jpg"
import { FaCheck } from "react-icons/fa6";

function MeetOurNannies() {

    return (
        <Fragment>
            <div className={styles.MeetOurNannies}>
                <div className="container">
                    <div className="row">
                        <div className={`${styles.nannies} col`}>
                            <div className="subcol">
                                <div className={styles.nanniesBabyImg}>
                                    <img src={babytwo} alt="baby2" />
                                </div>
                                <div className={styles.nanniesformData}>
                                    <form action="" className={styles.nanniesForm}>
                                        <h3 className='text-center text-white'>Contact Nanny</h3>
                                        <input type="text" placeholder='Your Name *' className={styles.formInput} />
                                        <input type="text" placeholder='Your E-mail *' className={styles.formInput} />
                                        <textarea placeholder="Message" col="40" rows={6} className={styles.formTextarea}></textarea>
                                        <div className={styles.formBtn}>
                                            <a href="#" >Contact Nanny</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className={`${styles.nannies} ${styles.nannies1} col`}>
                            <div className={`${styles.MeetOurNanniesCenter} subcol`}>
                                <div className="sub-headings">
                                    <h2>Meet Our Nannies</h2>
                                    <h2 className={styles.MeetOurNanniesHeadingTwo}>The Best Nanny</h2>
                                </div>
                                <div className={styles.MeetOurNanniesText}>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci libero corporis totam aut error.</p>
                                </div>
                                <ul className={styles.MeetOurNanniesList}>
                                    <li><span><FaCheck /></span>  <h4>Who We Are</h4> </li>
                                    <li><span><FaCheck /></span>  <h4>Our Meetion</h4> </li>
                                    <li><span><FaCheck /></span>  <h4>Core Values</h4> </li>
                                    <li><span><FaCheck /></span>  <h4>Babysitting Services</h4> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MeetOurNannies
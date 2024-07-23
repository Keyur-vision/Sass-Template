import React, { Fragment } from 'react'
import styled from 'styled-components';
import "../styles/component/AboutMe.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function AboutMe() {

    const ContactCol = styled.div`
     width: 75%;
     padding: 20px ;

     @media (max-width: 768px) {
       width: 100%;
      }

       @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
       }
  `;

    const AboutFirstHeading = styled.div`
  color: #45b3df;
  font-size: 20px;
  font-weight: bold;
`;

    const AboutSubHeading = styled.div`
font-size: 30px;
    font-weight: bold;
    background: var(--pink-color);
    width: 90px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
    margin-top: 10px;
    margin-right: 20px;
    `;


    const AboutPeragraph = styled.div`
    font-size: 20px;
    line-height: 40px;
    `;

    const Flex = styled.div`
    display:flex;
    `;

    const AboutColTwo = styled.div`
     width: 25%;
     padding-top :60px;
     

     @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        padding-left: 50px;
       }

       @media only screen and (max-width: 768px) {
        width: 100%;
        padding-left: 50px;
       }
    `;

    const AboutPadding = styled.div`
        padding-top: 10px;
        font-size: 18px;
        font-weight: 400;
    `;


    const WidthFull = styled.div`
    padding-top : 30px;

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width : 50%
       }
    `;

    const PaddingTop = styled.div`
    padding-top : 100px;
    `;
    return (
        <Fragment>
            <div className="aboutMe">
                <div className="container">
                    <AboutFirstHeading>November 19, 2019 By Devlopers</AboutFirstHeading>
                    <div className="row">
                        <ContactCol>
                            <div className="col">
                                <h2>About Me</h2>
                                <Flex> <AboutSubHeading>L</AboutSubHeading> <AboutPeragraph> <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi illum, exercitationem rem fuga soluta et nulla facere modi neque explicabo, mollitia,</p> 
                                </AboutPeragraph> </Flex>
                                <AboutPeragraph>  <p> molestiae ipsam! Quisquam commodi quasi error beatae, dolor numquam odit iure quaerat quidem, vitae atque illo saepe</p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quasi illum, exercitationem rem fuga soluta et nulla facere modi neque explicabo, mollitia, molestiae ipsam! Quisquam commodi quasi error beatae, dolor numquam odit iure quaerat quidem, vitae atque illo saepe
                                </AboutPeragraph>
                            </div>
                        </ContactCol>
                        
                        <AboutColTwo>
                            <WidthFull>
                                <ul className="About-ul  w-100">
                                    <li> <h4>Client </h4>
                                        <p>WebGenius </p> </li>
                                    <li> <h4>Client </h4>
                                        <p>WebGenius </p> </li>
                                </ul>
                            </WidthFull>

                            <WidthFull>
                                <ul className="About-ul  w-100">
                                    <li> <h4>Client </h4>
                                        <p>WebGenius </p> </li>
                                    <li> <h4>Client </h4>
                                        <p>WebGenius </p> </li>
                                </ul>
                            </WidthFull>

                            <WidthFull>
                                <ul className="About-icons d-flex align-items-center w-100">
                                    <li className='AboutShareFontSize'> Share : </li>
                                    <li className='about-display-inline'>
                                        <li> <FaTwitter /></li>
                                        <li>  <FaFacebookF /></li>
                                        <li >  <FaYoutube />  </li>
                                        <li>  <FaLinkedinIn /></li>

                                    </li>

                                </ul>
                            </WidthFull>

                        </AboutColTwo>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutMe
import React, { Fragment } from 'react'
import styled from 'styled-components';
import { GrLocation } from "react-icons/gr";
import { CiMobile1 } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";

function Contact() {

    const ContactCol = styled.div`
     width: 33.33%;
     padding: 20px ;

     @media (max-width: 768px) {
       width: 100%;
      }

       @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
       }

  `;

    const ContactIcons = styled.div`
    font-size: 50px;
    color: #45b3df;
    text-align: center;
`;

    const ContactIconsTwo = styled.div`
    font-size: 50px;
    text-align: center;
`;

    const ContactIconsThree = styled.div`
    font-size: 50px;
    text-align: center;
`;

    const ContactTextCenter = styled.div`
    text-align: center;
`;

    const ContactPadding = styled.div`
    Padding : 30px;
    border-radius: 30px;
    border: 2px dashed;
    color: #45b3df;
    padding: 40px;
`;

    const ContactSecondColor = styled.div`
    color:#fa9db7;
    border: 2px dashed #fa9db7;
    Padding : 30px;
    border-radius: 30px;
    padding: 40px;
`;

    const ContactThirdColor = styled.div`
    color:#ffc85b;
    border: 2px dashed #ffc85b;
    Padding : 30px;
    border-radius: 30px;
    padding: 40px;
`;
    const ContactPeragraphFont = styled.div`
    font-size: 20px;
    `;

    return (
        <Fragment>
            <div className="main">
                <div className='container'>
                    <div className="row">
                        <ContactCol className='col'>
                            <ContactPadding>  <div className="subcol">
                                <ContactIcons><GrLocation /></ContactIcons>
                                <ContactTextCenter>  <h3>Our Daily:</h3>
                                    <ContactPeragraphFont><p>Lorem, ipsum dolor.</p> </ContactPeragraphFont>  </ContactTextCenter>
                            </div>
                            </ContactPadding>
                        </ContactCol>

                        <ContactCol className='col'>
                            <ContactSecondColor> <div className="subcol">
                                <ContactIconsTwo> <CiMobile1 /> </ContactIconsTwo>
                                <ContactTextCenter>  <h3>Phone Us:</h3>
                                    <ContactPeragraphFont><p>+123 456 789</p> </ContactPeragraphFont>  </ContactTextCenter>
                            </div>
                            </ContactSecondColor>
                        </ContactCol>

                        <ContactCol className='col'>
                            <ContactThirdColor>  <div className="subcol">
                                <ContactIconsThree><BiMessageDetail /></ContactIconsThree>
                                <ContactTextCenter>  <h3>E-Mail Us:</h3>
                                    <ContactPeragraphFont><p>supoort@mobirise.com</p> </ContactPeragraphFont>  </ContactTextCenter>
                            </div>
                            </ContactThirdColor>
                        </ContactCol>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
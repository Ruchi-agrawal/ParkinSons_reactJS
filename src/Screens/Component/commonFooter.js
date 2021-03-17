import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'reactstrap';
import { IOSPopup } from "Screens/Component/iOSpopup"

const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

export const CommonFooter = (props) => {
    const [showInstallMessage, setMessage] = useState(null)
    useEffect(() => {
        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            setMessage(true)
        }
        setTimeout(()=>{
            setMessage(false)
        }, 8000)
    }, [])
    return (
        <div className="countFooter">
            
            <div className="webFooter websiteFtr">
                <Container>
                    <Row>
                        <Col lg="4" md="5" sm="12" className="foterLft">
                            <a className="nuroScience">Neuroscience</a>
                            <a className="footerDrm"><img src={require('../../assets/images/inc.png')} alt="" title="" /></a>
                            <a className="footerDrmTxt">
                                <span>Dream.</span>
                                <span>Defy.</span>
                                <span>Deliver.</span>
                            </a>
                        </Col>
                        <Col lg="4" md="4" sm="12" className="footerMidCstm">
                            <p>For internal use only&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props?.useFor == "login" ? "All-NEUR-210008" : "All-NEUR-210012"}</p>
                        </Col>
                        <Col lg="4" md="3" sm="12" className="foterAbbvie">
                            <a><img src={require('../../assets/images/abbvie.jpg')} alt="" title="" /></a>
                            <a className="footerMsg"><img src={require('../../assets/images/msg.png')} alt="" title="" /></a>
                        </Col>
                    </Row>
                </Container>
                {showInstallMessage && <IOSPopup />}
            </div>
        
        </div>
    )
}
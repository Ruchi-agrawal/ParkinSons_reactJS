import React from "react";
import { Container, Row, Col } from 'reactstrap';

export const CommonFooter = () => {
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
                            <p>For internal Use Only&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All-NEUR-210012</p>
                        </Col>
                        <Col lg="4" md="3" sm="12" className="foterAbbvie">
                            <a><img src={require('../../assets/images/abbvie.jpg')} alt="" title="" /></a>
                            <a className="footerMsg"><img src={require('../../assets/images/msg.png')} alt="" title="" /></a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
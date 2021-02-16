import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';

class Index extends Component {
    render() {
        return (
            <div>

                {/* Common Header  */}
                    <Header />
                {/* End of Common Header  */}

                {/* start of mid section */}
                <div className="homeCntnt">
                    <Container>
                        <Row>
                            <Col lg="4" md="5">
                                 
                                {/* Start of Common space */}
                                <div className="headerSpc"></div>
                                {/* End of Common space */}

                                <div className="aboutLeft">
                                    <div><label>About</label></div>
                                    <div>
                                        <p>Here you will find information about this project and any terms and privacy statements.</p>
                                    </div>
                                </div>

                            </Col>

                            <Col lg="5" md="7">
                                <div className="comonMidSec aboutCntnt">
                                    <div className="termUses">
                                        <div><label>Terms of Use</label></div>
                                        <div>
                                            <p>This app is for internal use only, and intended for internal AbbVie personnel only to
                                                provide information regarding World Parkinson’s Day. All related materials are subject to
                                                Area and/or Local materials review and approval prior to execution under applicable AbbVie policies
                                                and procedures. Do not share the content of this app externally.</p>
                                        </div>
                                    </div>
                                    <div className="aboutPolicy">
                                        <div><label>Privacy Policy</label></div>
                                        <div><p><a>Click here</a> to view the Abbvie privacy policy</p></div>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="3"><div></div></Col>
                        </Row>
                    </Container>
                </div>
                {/* end of mid section */}

                {/* Common Footer */}
                     <Footer />
                {/* End of Common Footer */}

            </div>
        );
    }
}
export default Index;
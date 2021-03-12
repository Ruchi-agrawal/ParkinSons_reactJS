import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';

class Index extends Component {

    goToPrivacyPolicy = () => {
        window.open("https://www.abbvie.com/privacy.html")
    }
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
                            <Col lg="4" md="5" xs="12">

                                {/* Start of Common space */}
                                <div className="headerSpc"></div>
                                {/* End of Common space */}

                                <div className="aboutLeft">
                                    <div><label><b>About</b></label></div>
                                    <div>
                                        <p>This page provides information on how to use this site, its terms of use and privacy policy.</p>
                                    </div>
                                </div>

                            </Col>

                            <Col lg="5" md="7" xs="12">
                                <div className="comonMidSec aboutCntnt">
                                    <div>
                                        <div className="termUses">
                                            <div><label><b>About</b></label></div>
                                            <div>
                                                <p>
                                                  The home page  <img style={{ height: "18px" }} src={require("../../assets/images/homeicon.png")} />  displays the most recent posts in the order in which they were received, with a small flag denoting the nationality of the post. Scroll down the screen to see less recent posts. The total number of posts is given in the green rectangle in the screen footer.<br/><br/>
                                                  To share your own post with a ‘Commitment to Care’ for people living with Parkinson’s disease click the post button  <img style={{ height: "32px" }} src={require("../../assets/images/msg.png")} /> , add your name if you wish, your country, your short message of commitment (no more than 140 characters using the Latin alphabet), an image (less than 5mb is size) and a caption (no more than 40 characters) then click the post button <img style={{ height: "32px" }} src={require("../../assets/images/msgSend.png")} />.
                                                  Your post will now show on the home page.
                                                  <br/><br/> The ‘Countries’ page lists those countries with posts to the site and allows you to filter the countries you wish to view posts on the home page from by selecting or deselecting the ‘eye’ symbol <img style={{ height: "18px" }} src={require("../../assets/images/eye.png")} /> to the right of that country. If you are unable to find a specific affiliate in the ‘Countries’ section it may be that no posts have yet been made by users from that country.
                                                 </p>
                                            </div>
                                        </div><br/><br/>
                                        <div className="termUses">
                                            <div><label><b>Terms of Use</b></label></div>
                                            <div>
                                                <p>
                                                    This app is for internal use only and intended for internal AbbVie personnel only to provide information regarding World Parkinson’s Day. All related materials are subject to Area and/or Local materials review and approval prior to execution under applicable AbbVie policies and procedures. Do not share the content of this app externally.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="aboutPolicy">
                                            <div><label><b>Privacy Policy</b></label></div>
                                            <div><p><a onClick={this.goToPrivacyPolicy}>Click here</a> to view the Abbvie privacy policy</p></div>
                                        </div>
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
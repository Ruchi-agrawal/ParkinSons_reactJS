import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Index extends Component {
    render() {
        var countDownDate = new Date("apr 7, 2021 00:00:01").getTime()
        var setCountdown = setInterval(function () {
            var todayDate = new Date().getTime()
            var distanceDate = countDownDate - todayDate
            var days = Math.floor(distanceDate / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceDate % (1000 * 60 * 60)) / (1000 * 60));

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;

            if (distanceDate < 0) {
                clearInterval(setCountdown);
                document.getElementById("countdown").innerHTML = "Parkinsons Realeased";
            }
        }, 1000)
        return (
            <div>
                <div className="holdingSec">
                    <div><img src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>
                    <div className="shareCommet">
                        <p>Share your commitment to care for
                     people with Parkinson’s disease </p>
                    </div>
                    <div><p>Opens for your posts in:</p></div>
                    <div>
                        <div class="remainsDay">
                            <div><span id="days"></span><span>Days</span></div><a>:</a>
                            <div><span id="hours"></span><span>Hours</span></div><a>:</a>
                            <div><span id="minutes"></span><span>Minutes</span></div>
                        </div>
                    </div>
                </div>

                {/* Common Footer */}
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
                {/* End of Common Footer */}

            </div>
        );
    }
}
export default Index;
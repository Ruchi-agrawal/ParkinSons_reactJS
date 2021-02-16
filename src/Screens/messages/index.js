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
                <div className="homeCntnt msgsContent">
                    <Container>
                        <Row>
                            <Col>
                                <div className="msgsGroup">
                                    {/* Start of Common space */}
                                    <div className="headerSpc"></div>
                                    {/* End of Common space */}
                                    <div className="msgSections">
                                        <img src={require('../../assets/images/images3.jpg')} alt="" title="" />
                                    </div>
                                    <div className="msgSections">
                                        <img src={require('../../assets/images/images8.jpg')} alt="" title="" />
                                    </div>
                                    <div className="msgSections"><img src={require('../../assets/images/images3.jpg')} alt="" title="" /></div>
                                    <div className="msgSections">
                                        <img src={require('../../assets/images/images8.jpg')} alt="" title="" /></div>

                                    <div className="msgTxts">
                                        <div><img src={require('../../assets/images/images8.jpg')} alt="Parkinson" title="Parkinson" /></div>
                                        <p>Here is my message labore et dolore magna aliqua. Quis
                                        ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                                        lacus vel facilisis. </p>
                                    </div>
                                </div>
                            </Col>
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
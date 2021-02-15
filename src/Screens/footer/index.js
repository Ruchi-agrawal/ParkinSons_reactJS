import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Index extends Component{
  render(){
    return(
      <div className="webFooter">
        <Container>
          <Row>
            <Col sm="4" className="foterLft">
              <a className="nuroScience">Neuroscience</a>
              <a className="footerDrm"><img src={require('../../assets/images/inc.png')} alt="" title="" /></a>
              <a className="footerDrmTxt">
                <span>Dream.</span>
                <span>Defy.</span>
                <span>Deliver.</span>
              </a>
            </Col>
            <Col sm="5" className="footerMid">
              <p><a>120 posts</a></p>
              <p className="allDuod"><span>ALL DUOD XXXXXX</span></p>
            </Col>
            <Col sm="3" className="foterAbbvie">
              <a><img src={require('../../assets/images/abbvie.jpg')} alt="" title="" /></a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Index;
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getActivePosts } from "api/index"
import { withRouter } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noOfPosts: null
    }
    this.gotoMessage = this.gotoMessage.bind(this)
  }

  componentDidMount() {
    this.getNoOfPosts()
  }

  componentWillUnmount() {
  }

  getNoOfPosts = async () => {
    let response = await getActivePosts()
    if (response) {
      this.setState({ noOfPosts: response.length })
    }
  }

  gotoMessage = () => {
    this.props.history.push("/add_posts")
  }

  render() {
    let { noOfPosts } = this.state
    return (
      <div>

        <div className="webFooter websiteFtr">
          <Container>
            <Row>
              <Col lg="4" md="6" sm="4" className="foterLft">
                <a className="nuroScience">Neuroscience</a>
                <a className="footerDrm"><img src={require('../../assets/images/inc.png')} alt="" title="" /></a>
                <a className="footerDrmTxt">
                  <span>Dream.</span>
                  <span>Defy.</span>
                  <span>Deliver.</span>
                </a>
              </Col>
              <Col lg="5" md="4" sm="5" className="footerMid">
                <p><a>{noOfPosts} posts</a></p>
                <p className="allDuod"><span>ALL-NEUR-210008</span></p>
              </Col>
              <Col lg="3" md="2" sm="3" className="foterAbbvie">
                <a><img src={require('../../assets/images/abbvie.jpg')} alt="" title="" /></a>
                <a className="footerMsg"><img onClick={() => this.gotoMessage()} src={require('../../assets/images/msg.png')} alt="" title="" /></a>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="webFooter mobileFtr">
          <Container>
            <Row>
              <Col xs="12" className="footerMid">
                <p><a>120 posts</a></p>
                <a className="footerMsg"><img src={require('../../assets/images/msg.png')} alt="" title="" /></a>
              </Col>
              <Col xs="12" className="foterLft">
                <Row>
                  <Col xs="8">
                    <a className="nuroScience">Neuroscience</a>
                    <a className="footerDrm"><img src={require('../../assets/images/inc.png')} alt="" title="" /></a>
                    <a className="footerDrmTxt">
                      <span>Dream.</span>
                      <span>Defy.</span>
                      <span>Deliver.</span>
                    </a>
                  </Col>
                  <Col xs="4" className="mobAbbvie">
                    <a><img src={require('../../assets/images/abbvie.jpg')} alt="" title="" /></a>
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <div className="internalUse"><p>For internal use only &nbsp; ALL-NEUR-210008</p></div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    );
  }
}


export default withRouter(Index);
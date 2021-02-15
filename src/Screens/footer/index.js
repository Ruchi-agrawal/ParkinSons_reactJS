import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { getPosts } from "api/index"
class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      noOfPosts:null
    }
  }

  componentDidMount(){
    this.getNoOfPosts()
  }

  getNoOfPosts=async()=>{
    let response= await getPosts()
    if(response){
      this.setState({noOfPosts:response.length})
    }
  }
  render() {
    let {noOfPosts}=this.state
    return (
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
              <p><a>{noOfPosts} Posts</a></p>
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
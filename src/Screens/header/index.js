import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from "react-router-dom";
class Index extends Component {
  state = {
    anchorEl: undefined,
    open: false,
    isOpen: false
  };
  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };
  handleRequestClose = () => {
    this.setState({ open: false });
  };
  toggle = () => {
    this.setState({ isOpen: !(this.state.isOpen) })
  }

  gotoMessages=()=>{
    this.props.history.push("/messages")
  }
  render() {
    // if(localStorage.getItem("userEmail")==null){
    //   this.props.history.push("/login")
    // }
    return (
      <div className="webHeader">
        <div className="menubanner_bg">
          <Container>
            <Row>
              <Col lg="4" md="5" sm="10" xs="9">
                <div className="webLogo"><img onClick={this.gotoMessages} src={require('../../assets/images/weblogo2.png')} alt="Parkinson" title="Parkinson" /></div>
                <div className="mobLogo"><img onClick={this.gotoMessages} src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>
              </Col>
              <Col lg="8" md="7" sm="2" xs="3">
                <div className="customMenu">
                  <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} className={`MenuToggleCstm ${this.state.isOpen ? "active" : ""}`} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav navbar>
                        <NavItem><NavLink href="/messages"><img src={require('../../assets/images/homeicon.png')} alt="" title="" /></NavLink> </NavItem>
                        <NavItem><NavLink href="/countries">Countries</NavLink></NavItem>
                        <NavItem><NavLink href="/about">About</NavLink></NavItem>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default withRouter(Index);
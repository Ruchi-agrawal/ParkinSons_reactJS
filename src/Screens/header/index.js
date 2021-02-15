import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

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
  render() {
    return (
      <div className="webHeader">
        <div className="menubanner_bg">
          <Container>
            <Row>
              <Col sm="5" md="5" lg="4">
                <div className="webLogo"><img src={require('../../assets/images/weblogo.png')} alt="Parkinson" title="Parkinson" /></div>
              </Col>
              <Col sm="7" md="7" lg="8">
                <div className="customMenu">
                  <Navbar light expand="md">
                    <NavbarToggler onClick={this.toggle} className={`MenuToggleCstm ${this.state.isOpen ? "active" : ""}`} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                      <Nav navbar>
                        <NavItem><NavLink href="/"><img src={require('../../assets/images/homeicon.png')} alt="" title="" /></NavLink> </NavItem>
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
export default Index;
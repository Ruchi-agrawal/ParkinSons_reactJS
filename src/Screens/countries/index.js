import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import { getCountries } from "api/index"
import { countries } from 'country-data';
import { sortFunction } from "Screens/Component/sort"
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
        };
    }

    componentDidMount() {
        this.getCountry()
    }

    getCountry = async () => {
        // console.log("OPOPOPO", countries)
        let countryList = []
        let response = await getCountries()
        response.map(code => {

            let countryData = {
                name: countries[code?._id].name,
                count: code?.count
            }
            countryList.push(countryData)
        })
        console.log("countryList", countryList);
        this.setState({ countryList })
    }

    countryPostSort = async () => {
        let { countryList } = this.state;
        let sorted = await sortFunction(countryList, "count")
        this.setState({ countryList: sorted })
    }

    countrySort = async () => {
        let { countryList } = this.state;
        let sorted = await sortFunction(countryList, "name")
        this.setState({ countryList: sorted })
    }
    render() {
        let { countryList } = this.state
        return (
            <div>

                {/* Common Header  */}
                <Header />
                {/* End of Common Header  */}

                {/* start of mid section */}
                <div className="homeCntnt">
                    <Container>
                        <Row>
                            <Col lg="4" md="6">

                                {/* Start of Common space */}
                                <div className="headerSpc"></div>
                                {/* End of Common space */}

                                <div className="aboutLeft countryLeft">
                                    <div><label>Countries</label></div>
                                    <div>
                                        <p>
                                            Here you can see all the countries
                                            taking part in this event and how many
                                            messages they have posted. You can also
                                            select which countries you would like
                                            to the front page of this site by using the
                                            ‘eye’ symbol.
                                        </p>
                                    </div>
                                </div>

                            </Col>

                            <Col lg="5" md="6">
                                <div className="comonMidSec">

                                    <Row className="contryHead">
                                        <Col lg="5" md="5" sm="5">
                                            <p>Country
                                                <a className="shortArow"><img src={require('../../assets/images/toprow.png')} alt="" title="" />
                                                    <img src={require('../../assets/images/toprow.png')} onClick={this.countrySort} alt="" title="" className="shortArowRght" />
                                                </a>
                                            </p>
                                        </Col>
                                        <Col lg="3" md="3" sm="3" className="contryPost">
                                            <p>Posts
                                                <a className="shortArow"><img src={require('../../assets/images/toprow.png')} alt="" title="" />
                                                    <img src={require('../../assets/images/toprow.png')} onClick={this.countryPostSort} alt="" title="" className="shortArowRght" />
                                                </a>
                                            </p>
                                        </Col>
                                        <Col lg="4" md="4" sm="4" className="contryVisblty"><p>Visability</p></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                    <div className="cntryData">
                                        {countryList && countryList.length && countryList.map(country => (
                                            <div>
                                                <Row className="cntryRow">
                                                    <Col lg="5" md="5" sm="5" className="cntryFlag">
                                                        <a><img src={require('../../assets/images/be.png')} alt="" title="" /><span>{country?.name}</span></a></Col>
                                                    <Col lg="3" md="3" sm="3" className="cntryUnit"><p>{country?.count}</p></Col>
                                                    <Col lg="4" md="4" sm="4" className="cntryEye cntryEyeActv"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                                </Row>
                                                <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                            </div>
                                        ))}

                                        {/* <Row className="cntryRow">
                                        <Col lg="5" md="5" sm="5" className="cntryFlag">
                                            <a><img src={require('../../assets/images/de.png')} alt="" title="" /><span>Denmark</span></a></Col>
                                        <Col lg="3" md="3" sm="3" className="cntryUnit"><p>12</p></Col>
                                        <Col lg="4" md="4" sm="4" className="cntryEye"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                    <Row className="cntryRow">
                                        <Col lg="5" md="5" sm="5" className="cntryFlag">
                                            <a><img src={require('../../assets/images/fi.png')} alt="" title="" /><span>Finland</span></a></Col>
                                        <Col lg="3" md="3" sm="3" className="cntryUnit"><p>16</p></Col>
                                        <Col lg="4" md="4" sm="4" className="cntryEye"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                    <Row className="cntryRow">
                                        <Col lg="5" md="5" sm="5" className="cntryFlag">
                                            <a><img src={require('../../assets/images/fr.png')} alt="" title="" /><span>France</span></a></Col>
                                        <Col lg="3" md="3" sm="3" className="cntryUnit"><p>8</p></Col>
                                        <Col lg="4" md="4" sm="4" className="cntryEye"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                    <Row className="cntryRow">
                                        <Col lg="5" md="5" sm="5" className="cntryFlag">
                                            <a><img src={require('../../assets/images/ge.png')} alt="" title="" /><span>Germany</span></a></Col>
                                        <Col lg="3" md="3" sm="3" className="cntryUnit"><p>30</p></Col>
                                        <Col lg="4" md="4" sm="4" className="cntryEye"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                    <Row className="cntryRow">
                                        <Col lg="5" md="5" sm="5" className="cntryFlag">
                                            <a><img src={require('../../assets/images/it.png')} alt="" title="" /><span>Italy</span></a></Col>
                                        <Col lg="3" md="3" sm="3" className="cntryUnit"><p>9</p></Col>
                                        <Col lg="4" md="4" sm="4" className="cntryEye"><a><img src={require('../../assets/images/eye.png')} alt="" title="" /></a></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div> */}

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
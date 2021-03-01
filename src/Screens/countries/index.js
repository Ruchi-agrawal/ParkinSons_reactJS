import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import { getCountries, handleVisibility } from "api/index"
import CircularProgress from '@material-ui/core/CircularProgress';
import { countries } from 'country-data';
import { sortFunction } from "Screens/Component/sort"
import Flag from 'react-world-flags'
class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            nodata: true,
            sorting: true
        };
    }

    componentDidMount() {
        this.getCountry()
    }

    getCountry = async () => {
        let countryList = []
        let response = await getCountries()
        response?.length > 0 && response.map(code => {
            let countryData = {
                name: countries[code?._id].name,
                count: code?.count,
                code: code?._id
            }
            countryList.push(countryData)
        })
        this.setState({ countryList, nodata: false })
    }

    countryPostSort = async (event) => {
        let { countryList, sorting } = this.state;
        let sorted = await sortFunction(countryList, event, sorting)
        sorting = !sorting
        this.setState({ countryList: sorted, sorting })
    }

    handleVisibility = async (country, control) => {
        let { countryList } = this.state;
        if (control == "on") {
            localStorage.removeItem(country?.code)
        } else {
            localStorage.setItem(country?.code, "visibility_off")
        }
        this.componentDidMount()
    }


    checkVisibility = (countryCode) => {
        let check = localStorage.getItem(countryCode)
        if (check == "visibility_off") {
            return false
        } else {
            return true
        }
    }

    render() {
        let { countryList, nodata } = this.state

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

                                <div className="aboutLeft countryLeft">
                                    <div><label>Countries</label></div>
                                    <div>
                                        <p>Here you can see all the countries taking part in this event and how many
                                        messages they have posted. You can also select which countries you would
                                        like to the front page of this site by using the ‘eye’ symbol.
                                        </p>
                                    </div>
                                </div>

                            </Col>

                            <Col lg="5" md="7">
                                <div className="comonMidSec">

                                    <Row className="contryHead">
                                        <Col lg="5" md="5" sm="5" xs={5}>
                                            <p>Country
                                                <a className="shortArow" onClick={() => this.countryPostSort("name")} >
                                                    <img src={require('../../assets/images/toprow.png')} alt="" title="" />
                                                    <img src={require('../../assets/images/toprow.png')} alt="" title="" className="shortArowRght" />
                                                </a>
                                            </p>
                                        </Col>
                                        <Col lg="3" md="3" sm="3" xs={3} className="contryPost">
                                            <p>Posts
                                                <a className="shortArow" onClick={() => this.countryPostSort("count")} >
                                                    <img src={require('../../assets/images/toprow.png')} alt="" title="" />
                                                    <img src={require('../../assets/images/toprow.png')} alt="" title="" className="shortArowRght" />
                                                </a>
                                            </p>
                                        </Col>
                                        <Col lg="4" md="4" sm="4" xs={4} className="contryVisblty"><p>Visability</p></Col>
                                    </Row>
                                    <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>


                                    <div className="cntryData">
                                        {nodata && <div className="circularProgress"> <CircularProgress className="w-3 mr-3 mb-3 progress-primary" color="secondary" thickness={3} /></div>}
                                        {countryList && countryList.length > 0 && countryList.map((country, index) => (
                                            <div>
                                                <Row className="cntryRow">
                                                    <Col lg="5" md="5" sm="5" className="cntryFlag">
                                                        <a>
                                                            {/* <Flag code={country?.code} className="counntryFlagShow" /> */}
                                                            <img src={require(`../../assets/countries/${country?.name}-Flag-icon.png`)} alt="" title="" />
                                                            <span>{country?.name}</span>
                                                        </a>
                                                    </Col>
                                                    <Col lg="3" md="3" sm="3" className="cntryUnit"><p>{country?.count}</p></Col>
                                                    <Col lg="4" md="4" sm="4" className="cntryEye">
                                                        <a>
                                                            {this.checkVisibility(country?.code) ?
                                                                <img className="cntryEyeActv" src={require('../../assets/images/eye.png')} onClick={() => this.handleVisibility(country, "off")} alt="" title="" />
                                                                :
                                                                <img className="cntryEyeDeactv" src={require('../../assets/images/eye.png')} onClick={() => this.handleVisibility(country, "on")} alt="" title="" />
                                                            }

                                                        </a>
                                                    </Col>
                                                </Row>
                                                <div className="cntryBrdr"><img src={require('../../assets/images/btmbrdr.png')} alt="" title="" /></div>

                                            </div>
                                        ))}
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

            </div >
        );
    }
}


export default Index;
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import { FormGroup, Label, Input } from 'reactstrap';
import ReactFlagsSelect from 'react-flags-select';
import "react-flags-select/css/react-flags-select.css";
import "react-flags-select/scss/react-flags-select.scss";
import { API_URL } from "apiUrl.js"
import { fileUpload, createPost } from "api/index"

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country_code: 'IN',
      postData: {},
      isFileSelected: false
    };
    this.uploadFile = this.uploadFile.bind(this);
  }
  componentDidMount() {
  }

  onSelectFlag = (countryCode) => {
    let { postData } = this.state
    postData["countryCode"] = countryCode
    this.setState({ postData })
  }

  handleChange = (event) => {
    console.log(event.target.name, "000", this.state.postData)
    let { postData } = this.state
    postData[event.target.name] = event.target.value
  }

  uploadFile = async (e) => {
    this.setState({ filePreview: URL.createObjectURL(e.target.files[0]), isFileSelected: e.target.files[0]?.name })
    let { postData } = this.state
    let response = await fileUpload(e)
    if (response) {
      postData["imageUrl"] = response.path
      this.setState({ postData })
    }

  }

  handleSubmit = async () => {
    let { postData } = this.state
    if (!postData.userName && postData.userName == (null || undefined)) {
      this.setState({ blankName: "User Name is Blank." })
    } else if (!postData.countryCode && postData.countryCode == (null || undefined)) {
      this.setState({ blankCountry: "Country is not Selected." })
    } else {
      this.setState({ blankName: false, blankCountry: false })
      let response = await createPost(postData)
      if (response) {
        setTimeout(() => {
          this.props.history.push("/countries")
        }, 1000)
      }
    }
    setTimeout(() => {
      this.setState({ blankName: false, blankCountry: false })
    }, 3000)

  }


  render() {
    let { isFileSelected, postData, blankCountry, blankName } = this.state
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

                <div className="msgBoard">
                  <div className="msgBoardIner">
                    <p>Fill-in the form to add your
                      post to the message board</p>
                  </div>
                  <p>you can add:</p>
                  <ul>
                    <li>- an image with a message</li>
                    <li>- just a mesage</li>
                    <li>- just an image</li>
                  </ul>
                </div>
              </Col>

              <Col lg="5" md="6">
                <div className="comonMidSec postform">
                  {blankCountry && <b className="ErrorMssg">{blankCountry}</b>}
                  {blankName && <b className="ErrorMssg">{blankName}</b>}
                  <div>
                    <FormGroup>
                      <Label for="username"><span>*</span>Enter the name you would like to display</Label>
                      <Input type="text" name="userName" id="username" value={postData && postData?.userName} onChange={this.handleChange} />
                    </FormGroup>
                  </div>

                  <div className="selectCntry">
                    <div><label><span>*</span>Select your country</label></div>
                    <ReactFlagsSelect
                      // countries={["AT", "AU", "BE", "BU", "CR", "CY", "CZ", "DE", "ES", "FI", "FR", "GE", "GR",
                      //   "HU", "IR", "IT", "LA", "LT", "LU", "NE", "PL", "PT", "RO", "SK", "SI", "SE", "SW", "IC", "LI",
                      //   "NO", "AL", "IS", "KU", "QA", "SA", "AE", "RU", "SO", "SW", "TU", "UK", "NZ", "JA", "TA", "TH",
                      //   "CA", "US", "PR"]}
                      // customLabels={{
                      //   "AT": "Austria",
                      //   "AU": "Australia",
                      //   "BE": "Belgium",
                      //   "BU": "Bulgaria",
                      //   "CR": "Croatia",
                      //   "CY": "Cyprus",
                      //   "CZ": "Czech Republic",
                      //   "DE": "Denmark",
                      //   "ES": "Estonia",
                      //   "FI": "Finland",
                      //   "FR": "France",
                      //   "GE": "Germany",
                      //   "GR": "Greece",
                      //   "HU": "Hungary",
                      //   "IR": "Ireland",
                      //   "IT": "Italy",
                      //   "LA": "Latvia",
                      //   "LT": "Lithuania",
                      //   "LU": "Luxembourg",
                      //   "NE": "Netherlands",
                      //   "PL": "Poland",
                      //   "PT": "Portugal",
                      //   "RO": "Romania",
                      //   "SK": "Slovakia",
                      //   "SI": "Slovenia",
                      //   "SP": "Spain",
                      //   "SE": "Sweden",
                      //   "IC": "Iceland",
                      //   "LI": "Liechtenstein",
                      //   "NO": "Norway",
                      //   "AL": "Albania",
                      //   "IS": "Israel",
                      //   "KU": "Kuwait",
                      //   "QA": "Qatar",
                      //   "SA": "Saudi Arabia",
                      //   "AE": "United Arab Emirates",
                      //   "RU": "Russia",
                      //   "SO": "South Africa",
                      //   "SW": "Switzerland",
                      //   "TU": "Turkey",
                      //   "UK": "United Kingdom",
                      //   "NZ": "New Zealand",
                      //   "JA": "Japan",
                      //   "TA": "Taiwan",
                      //   "TH": "Thailand",
                      //   "CA": "Canada",
                      //   "US": "United States",
                      //   "PR": "Puerto Rico"
                      // }}
                      placeholder="Select .."
                      onSelect={this.onSelectFlag}
                      selected={this.state.country_code}
                      searchable
                    />

                  </div>

                  <div className="msgUpr">
                    <div className="msgText"><span>Message ..</span></div>
                    <FormGroup>
                      <Label for="entrymessage">Enter your message - It should be less than 140 characters</Label>
                      <Input type="textarea" onChange={this.handleChange} value={postData && postData?.message} name="message" id="entrymessage" placeholder="Message .." />
                    </FormGroup>
                  </div>

                  <div className="msgUpr msgUprBtm">
                    <div className="msgText"><span>Image</span></div>

                    <div className="brwsFindUpr">
                      <div className="brwsFind">
                        <p>Browse to find the image you would like to add</p>
                        <div className="brwSize">
                          <div className="brwSizeLft"><p>(Max image size 2mb)</p></div>
                          <div className="brwSizeRght">{isFileSelected ? isFileSelected : <p>No file selected</p>}</div>
                        </div>
                      </div>
                      <div className="shrBrows" >
                        <label for="fileInput">
                          <input type="file" id="fileInput" name="postImage" hidden onChange={this.uploadFile} />
                          <img src={require('../../assets/images/share2.png')} alt="" title="" />
                        </label>

                        <a>
                          {isFileSelected && <img src={this.state.filePreview} alt="" title="" />}
                        </a>
                      </div>
                    </div>

                  </div>

                  <div>
                    <FormGroup>
                      <Label for="entercaption">Enter your caption - It should be less than 40 characters</Label>
                      <Input onChange={this.handleChange} name="caption" type="text" name="text" value={postData && postData?.text} id="entercaption" placeholder="Caption .." disabled={isFileSelected ? false : true} />
                    </FormGroup>
                  </div>

                  <div className="msgSend">
                    <a onClick={this.handleSubmit}>
                      <img src={require('../../assets/images/msgSend.png')} alt="" title="" />
                    </a>
                  </div>

                </div>
              </Col>

              <Col lg="3">
                <div></div>
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
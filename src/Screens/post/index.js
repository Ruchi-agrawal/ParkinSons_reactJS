import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import { FormGroup, Label, Input } from 'reactstrap';
import ReactFlagsSelect from 'react-flags-select';
import "react-flags-select/css/react-flags-select.css";
import "react-flags-select/scss/react-flags-select.scss";
import { fileUpload, createPost } from "api/index"
import $ from "jquery"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country_code: 'IN',
      postData: {},
      isFileSelected: false,
      msgChar: null,
      messageLength: 0,
      captionLength: 0
    };
    this.uploadFile = this.uploadFile.bind(this);
  }
  componentDidMount() {
    // let { postData } = this.state
    // postData["userId"] = localStorage.getItem("userId")
  }

  onSelectFlag = (countryCode) => {
    console.log("cjsahibc", countryCode)
    let { postData } = this.state
    postData["countryCode"] = countryCode
    this.setState({ postData })
  }

  handleChange = (event) => {
    let { postData, messageLength, captionLength } = this.state
    let target = event.target
    if (target?.name == "message") {
      messageLength = target?.value?.length
      if (messageLength <= 140) {
        postData[target.name] = target.value
        this.setState({ messageLength, postData })
      } else {
        const value = target.value.substring(0, 140)
        messageLength=value.length
        postData[target.name] = value
        this.setState({ postData, messageLength})

      }
    } else if (target?.name == "caption") {
      captionLength = target?.value?.length
      if (captionLength <= 40) {
        postData[target.name] = target.value
        this.setState({ captionLength, postData })
      } else {
        const value = target.value.substring(0, 40)
        captionLength=value.length
        postData[target.name] = value
        this.setState({ postData, captionLength})
      }
    } else {
      postData[target.name] = target.value
    }
  }

  uploadFile = async (e) => {
    this.setState({ filePreview: URL.createObjectURL(e.target.files[0]), isFileSelected: e.target.files[0]?.name })
    let { postData } = this.state
    let response = await fileUpload(e)
    if (response) {
      postData["imageUrl"] = response?.filename
      this.setState({ postData })
    }

  }

  handleSubmit = async () => {
    let userId = localStorage.getItem("userId")
    let { postData } = this.state
    if (!postData.userName && postData.userName == (null || undefined)) {
      this.setState({ blankName: "User Name is Blank." })
    } else if (!postData.countryCode && postData.countryCode == (null || undefined)) {
      this.setState({ blankCountry: "Country is not Selected." })
    } else {
      this.setState({ blankName: false, blankCountry: false })
      postData["userId"] = userId
      let response = await createPost(postData)
      if (response) {
        setTimeout(() => {
          this.props.history.push("/messages")
        }, 1000)
      }
    }
    setTimeout(() => {
      this.setState({ blankName: false, blankCountry: false })
    }, 3000)

  }


  render() {
    let { isFileSelected, postData, blankCountry, blankName, messageLength, captionLength } = this.state
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

                <div className="msgBoard">
                  <div className="msgBoardIner">
                    <p>Fill-in the form to add your
                      post to the message board</p>
                  </div>
                  <p>you can add:</p>
                  <ul>
                    <li>- an image with a message</li>
                    <li>- just a message</li>
                    <li>- just an image</li>
                  </ul>
                </div>
              </Col>

              <Col lg="4" md="5">
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
                      searchPlaceholder="Search countries"
                      countries={["AL", "AT", "AU", "BE", "BG", "CA", "HR", "CY", "CZ", "DK", "FI", "FR", "DE", "GR",
                        "HU", "IS", "IE", "IL", "IT", "JP", "KW", "LV", "LI", "LT", "LU", "NL", "NO", "NZ", "PL", "PR", "PT",
                        "QA", "RO", "RU", "SK", "SI", "SE", "SA", "ZA", "CH", "ES", "TR", "TW", "TH", "GB", "US", "AE",]}

                      customLabels={{
                        "AL": "Albania",
                        "AT": "Austria",
                        "AU": "Australia",
                        "BE": "Belgium",
                        "BG": "Bulgaria",
                        "CA": "Canada",
                        "HR": "Croatia",
                        "CY": "Cyprus",
                        "CZ": "Czech Republic",
                        "DK": "Denmark",
                        "ES": "Estonia",
                        "FI": "Finland",
                        "FR": "France",
                        "DE": "Germany",
                        "GR": "Greece",
                        "HU": "Hungary",
                        "IS": "Iceland",
                        "IE": "Ireland",
                        "IL": "Israel",
                        "IT": "Italy",
                        "JP": "Japan",
                        "KW": "Kuwait",
                        "LV": "Latvia",
                        "LI": "Liechtenstein",
                        "LT": "Lithuania",
                        "LU": "Luxembourg",
                        "NL": "Netherlands",
                        "NO": "Norway",
                        "NZ": "New Zealand",
                        "PL": "Poland",
                        "PR": "Puerto Rico",
                        "PT": "Portugal",
                        "QA": "Qatar",
                        "RO": "Romania",
                        "RU": "Russia",
                        "SK": "Slovakia",
                        "SI": "Slovenia",
                        "SE": "Sweden",
                        "ZA": "South Africa",
                        "CH": "Switzerland",
                        "ES": "Spain",
                        "SA": "Saudi Arabia",
                        "TR": "Turkey",
                        "TW": "Taiwan",
                        "TH": "Thailand",
                        "GB": "United Kingdom",
                        "US": "United States",
                        "AE": "United Arab Emirates",
                      }}
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
                      <div className="limittextRght brwsFind"><p>{140 - messageLength} characters</p></div>
                    </FormGroup>
                  </div>

                  <div className="msgUpr msgUprBtm">
                    <div className="msgText"><span>Image</span></div>

                    <div className="brwsFindUpr">
                      <div className="brwsFind">
                        <p>Browse to find the image you would like to add</p>
                        <div className="brwSize">
                          <div className="brwSizeLft"><p>(Max image size 2mb)</p></div>
                          <div className="brwSizeRght">{isFileSelected ? <p>{isFileSelected}</p> : <p>No file selected</p>}</div>
                        </div>
                      </div>
                      <div className="shrBrows" >
                        <label for="fileInput">
                          <input type="file" id="fileInput" name="postImage" hidden onChange={this.uploadFile} />
                          <img src={require('../../assets/images/share2.png')} alt="" title="" />
                        </label>

                        {isFileSelected && <a>
                          <img src={this.state.filePreview} alt="" title="" />
                        </a>}
                      </div>
                    </div>

                  </div>

                  <div>
                    <FormGroup>
                      <Label for="entercaption">Enter your caption - It should be less than 40 characters</Label>
                      <Input className="redBorder" onChange={this.handleChange} name="caption" type="text" value={postData && postData?.caption} id="entercaption" placeholder="Caption .." disabled={isFileSelected ? false : true} />
                      <div className="limittextRght brwsFind"><p>{40 - captionLength} characters</p></div>
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
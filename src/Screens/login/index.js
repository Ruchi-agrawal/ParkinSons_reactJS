import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import md5 from 'md5-hash';
import { saveUserId } from "api/index"
import { CommonFooter } from "Screens/Component/commonFooter"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      reqEmail: null,
      loginData: {}
    };
  }
  handleChange = (event) => {
    let { loginData } = this.state
    loginData[event.target.name] = event.target.value;

    this.setState({ loginData })
  }

  handleSubmit = async () => {
    let { loginData } = this.state
    let {email , password}=loginData
    if (!email || email == "") {
      this.setState({ reqEmail: "E-mail is blank!" })
    } else if (!password || password == "") {
      this.setState({ reqEmail: "Password is blank!" })
    } else if (password !== "#8rrw456ZX") {
      this.setState({ reqEmail: "Incorrect Password" })
    } else {
      const UUID = md5(md5(email))
      let data = {
        userId: UUID,
        type: "user"
      }

      let response = await saveUserId(data)
      if (response) {
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userId", UUID)
        this.props.history.push({
          pathname: "/messages"
        })
      }
    }
    setTimeout(() => {
      this.setState({ reqEmail: false })
    }, 4000)
  }
  render() {
    let { reqEmail } = this.state
    return (
      <div>
        <div className="customLogin">

          <div className="loginIner">

            <div><img src={require('../../assets/images/WebLogoPng.png')} alt="Parkinson" title="Parkinson" /></div>

            <div className="loginForm">
              <FormGroup>
                <Label for="useremail">Enter your work email adress</Label>
                <Input onChange={this.handleChange} type="email" name="email" id="useremail" />
              </FormGroup>
              <FormGroup>
                <Label for="useremail">Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" id="userpassword" />
              </FormGroup>
              {reqEmail && <div style={{ color: "#F6ECEA" }}><b>{reqEmail}</b></div>}
              <div className="loginFormBtn" onClick={this.handleSubmit}><Button color="primary">Enter</Button></div>
            </div>

          </div>

        </div>
        <CommonFooter />

      </div>
    );
  }
}
export default Index;
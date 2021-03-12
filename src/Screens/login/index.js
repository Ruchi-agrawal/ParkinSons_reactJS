import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import md5 from 'md5-hash';
import { saveUserId } from "api/index"
import { CommonFooter } from "Screens/Component/commonFooter"
import { validateEmail, validDomain } from "Screens/Component/validateEmail"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      reqEmail: null,
      loginData: {}
    };
  }
  handleChange = (event, typo) => {
    let { loginData } = this.state
    // if (typo == "email") {
    //   let validEmail = validateEmail(event.target.value)
    //   if (validEmail) {
    //     loginData[typo] = event.target.value;
    //   }else{
    //     this.setState({ reqEmail: "Invalid Email-address." })
    //   }
    // } 
    loginData[event.target.name] = event.target.value;
    this.setState({ loginData, reqEmail: false })
  }

  handleSubmit = async () => {
    let { loginData } = this.state
    let { email, password } = loginData
    let isValidDomain = validDomain(email)
    if (!email || email == "") {
      this.setState({ reqEmail: "E-mail is blank!" })
    } else if (!password || password == "") {
      this.setState({ reqEmail: "Password is blank!" })
    } else if (password !== "#8rrw456ZX") {
      this.setState({ reqEmail: "The password or email address has not been recognised" })
    } else if (!isValidDomain) {
      this.setState({ reqEmail: "Entered email domain is not accepted." })
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

            <div><img src={require('../../assets/images/logo03March.png')} alt="Parkinson" title="Parkinson" /></div>

            <div className="loginForm">
              <FormGroup>
                <Label for="useremail">Enter your work email address</Label>
                <Input onChange={(e) => this.handleChange(e, "email")} type="email" name="email" id="useremail" />
              </FormGroup>
              <FormGroup>
                <Label for="useremail">Password</Label>
                <Input onChange={(e) => this.handleChange(e, "password")} type="password" name="password" id="userpassword" />
              </FormGroup>
              {reqEmail && <div className="errLogin" ><b>{reqEmail}</b></div>}
              <div className="loginFormBtn" onClick={this.handleSubmit}><Button color="primary">Enter</Button></div>
            </div>

          </div>

        </div>
        <CommonFooter useFor="login" />

      </div>
    );
  }
}
export default Index;
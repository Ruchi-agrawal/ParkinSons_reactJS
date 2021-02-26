import React, { Component } from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import md5 from 'md5-hash';
import {saveUserId} from "api/index"
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      reqEmail: null
    };
  }
  handleChange = (event) => {
    let { email } = this.state
    email = event.target.value

    this.setState({ email })
  }

  handleSubmit = async() => {
    let { email } = this.state
    if (!email || email == "") {
      this.setState({ reqEmail: "E-mail is blank!" })
    } else {
      const UUID = md5(md5(email))
      let response = await saveUserId(UUID)
      if(response){
        localStorage.setItem("userEmail", email)
        localStorage.setItem("userId", UUID)  
        this.props.history.push({
          pathname: "/add_posts"
        })
      }      
    }
    setTimeout(() => {
      this.setState({ reqEmail: false })
    }, 3000)
  }
  render() {
    let { reqEmail } = this.state
    return (
      <div className="customLogin">

        <div className="loginIner">

          <div><img src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>

          <div className="loginForm">
            <FormGroup>
              <Label for="useremail">Enter your work email adress</Label>
              <Input onChange={this.handleChange} type="email" name="email" id="useremail" />
            </FormGroup>
            {reqEmail && <div style={{ color: "#F6ECEA" }}><b>{reqEmail}</b></div>}
            <div className="loginFormBtn" onClick={this.handleSubmit}><Button color="primary">Enter</Button></div>
          </div>

        </div>

      </div>
    );
  }
}
export default Index;
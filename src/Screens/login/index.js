import React, { Component } from 'react';

import { FormGroup, Label, Input, Button } from 'reactstrap';

class Index extends Component {
    render() {
        return (
            <div className="customLogin">

              <div className="loginIner">
                
                <div><img src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>
                
                <div className="loginForm">
                    <FormGroup>
                      <Label for="useremail">Enter your work email adress</Label>
                      <Input type="email" name="email" id="useremail" />
                    </FormGroup>
                    <div className="loginFormBtn"><Button color="primary">Enter</Button></div>
                </div>

              </div>  

            </div>
        );
    }
}
export default Index;
import React, { Component } from 'react';

class Index extends Component {
    render() {
        return (
            <div className="holdingSec">  
               <div><img src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>
               <p>Opens for your posts in:</p>
            </div>
        );
    }
}
export default Index;
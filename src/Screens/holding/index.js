import React, { Component } from 'react';
import { CommonFooter } from "Screens/Component/commonFooter"
import { IOSPopup } from "Screens/Component/iOSpopup"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    gotoLogin=()=>{
        this.props.history.push("/login")
    }

    render() {
        let self = this
        var countDownDate = new Date("april 7, 2021 00:00:01").getTime()
        var setCountdown = setInterval(function () {
            var todayDate = new Date().getTime()
            var distanceDate = countDownDate - todayDate
            var days = Math.floor(distanceDate / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distanceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distanceDate % (1000 * 60 * 60)) / (1000 * 60));

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;

            if (distanceDate < 0) {
                clearInterval(setCountdown);
                self.gotoLogin()
            }
        }, 1000)
        return (
            <div>
                <div className="holdingSec">
                    <div><img src={require('../../assets/images/logo03March.png')} alt="Parkinson" title="Parkinson" /></div>
                    <div className="shareCommet">
                        <p>Share your commitment to care for
                     people with Parkinson’s disease </p>
                    </div>
                    <div><p>Opens for your posts in:</p></div>
                    <div>
                        <div class="remainsDay">
                            <div><span id="days"></span><span>Days</span></div><a>:</a>
                            <div><span id="hours"></span><span>Hours</span></div><a>:</a>
                            <div><span id="minutes"></span><span>Minutes</span></div>
                        </div>
                    </div>
                </div>


                {/* Common Footer */}
                <CommonFooter />
                {/* End of Common Footer */}
            </div>
        );
    }
}
export default Index;
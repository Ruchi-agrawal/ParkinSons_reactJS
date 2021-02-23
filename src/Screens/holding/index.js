import React, { Component } from 'react';

class Index extends Component {
    render() {
        var countDownDate = new Date("apr 7, 2021 00:00:01").getTime()
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
                document.getElementById("countdown").innerHTML = "Parkinsons Realeased";
            }
        }, 1000)
        return (
            <div className="holdingSec">
                <div><img src={require('../../assets/images/WebLogo.jpg')} alt="Parkinson" title="Parkinson" /></div>
                <div>
                    <p>Opens for your posts in:</p>
                </div>
                <div>
                    <div class="remainsDay">
                        <div><span id="days"></span><span>Days</span></div><a>:</a>
                        <div><span id="hours"></span><span>Hours</span></div><a>:</a>
                        <div><span id="minutes"></span><span>Minutes</span></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Index;
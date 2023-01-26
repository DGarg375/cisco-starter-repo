import React, { Component, useEffect } from 'react';
import './ipAddress.css';

class FindAddress extends Component {
    render() {
        let result = "";
        if(this.props.ip_service === "ipv4") {
            result = "this is ipv4 service API";
            fetch('https://api64.ipify.org')
            .then(response => response.json())
            .then(data => console.log(data));
        } else if(this.props.ip_service === "ipv6") {
            result = "this is ipv6 service API";
        }
        return(
            <div>{result}</div>
        );
    }
}

export default FindAddress;
import React, { Component, useEffect, useState } from 'react';
import './ipAddress.cpp';

class IPAddress extends Component {
    render() {
        const type_of_request = this.props.title;
        function Something() {
            const [word, setWord] = useState("");
            let url = "";
            useEffect(() => {
                if(type_of_request === "ipv4") {
                    url = 'https://api.ipify.org?format=json';
                } else if(type_of_request === "ipv6") {
                    url = 'https://api64.ipify.org?format=json';
                }
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    setWord(data.ip);
                })
            }, []);
            return(
                <div>{word}</div>
            );
        }
        return(
            <Something></Something>
        );
    }
}

export default IPAddress;
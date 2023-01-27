import React, { Component, useState, useEffect } from 'react';
import './latency.css';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:55455');

class Latency extends Component {
    render() {
        function Newstuff() {
            const [figure, setFigure] = useState(0);
            client.onopen = () => {
                console.log('WebSocket Client Connected');
            }
            client.onmessage = (message) => {
                setFigure(message.data - Date.now());
            }
            return(
                <div>{figure} ms</div>
            );
        }
        return(
            <Newstuff></Newstuff>
        );
    }
};

export default Latency;
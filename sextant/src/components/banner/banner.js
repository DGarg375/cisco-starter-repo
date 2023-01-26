import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
    render() {
        return(
            <div class="header-main-container">
                <div class="title-container">
                    Sextant <span id="trademark-symbol"><div>™</div><div>®</div><div>©</div></span>
                </div>
            </div>
        );
    }
};

export default Banner;
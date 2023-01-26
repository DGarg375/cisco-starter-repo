import React, { Component } from 'react';
import './exhibit.css';

class Exhibit extends Component {
    render() {
        return(
            <div class="exhibit-layer">
                <h2 class="exhibit-heading">{this.props.name}</h2>
                <div class="exhibit-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Exhibit;
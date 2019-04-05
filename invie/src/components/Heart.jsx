import React, { Component } from 'react';

class Heart extends Component {
    render() {
        return (
            <div class="like is-liked" style={this.props.style}></div>
        )
    }
}

export default Heart;
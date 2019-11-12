import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.name}</h1>
           <h1>this is about class</h1>     
            </div>
        );
    }
}

export default About;
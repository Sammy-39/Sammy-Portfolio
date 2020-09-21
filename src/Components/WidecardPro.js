import React, { Component } from 'react'

class WidecardPro extends Component {
    render() {
        return (
        <div class="widecard">
            <div class="compdet">
                <h3> {this.props.title} </h3>
                
                <h4 class="secondtext">
                    {this.props.description}
                </h4>
                
                <h4 class="secondtext">
                    {this.props.link}
                </h4>
                
            </div>
        </div>
        )
    }
}

export default WidecardPro;
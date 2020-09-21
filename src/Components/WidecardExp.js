import React, { Component } from 'react'

class WidecardEdu extends Component {
    render() {
        return (
        <div class="widecard">
            <div class="compdet">
                <h3> {this.props.title} </h3>
                
                <h4 class="secondtext">
                    {this.props.task1}
                </h4>

                <h4 class="secondtext">
                    {this.props.task2}
                </h4>

                <h4 class="secondtext">
                    {this.props.achievement}
                </h4>
                
                <h4 class="secondtext">
                    {this.props.from} - {this.props.to}
                </h4>
                
            </div>
        </div>
        )
    }
}

export default WidecardEdu;
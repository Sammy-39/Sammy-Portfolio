import React, { Component } from 'react';

import WidecardExp from '../Components/WidecardExp';

class Experience extends Component {
    render() {
        return (
        <div className="condiv">
            <h1 className="subtopic">
                My Experience
            </h1>
            
            <WidecardExp title="Software Engineer Intern - Infosys Ltd" 
            task1="- Developed IMGSteg App - a MVC based application for message encryption by image steganography"
            achievement="- Scored 87% in the final assessment of the internship program" 
            from="Jan 2018" to="May 2018"/>
            
        </div>
        )
    }
}

export default Experience;
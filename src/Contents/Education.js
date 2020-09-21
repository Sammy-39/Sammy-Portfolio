import React, { Component } from 'react';

import WidecardEdu from '../Components/WidecardEdu';

class Education extends Component {
    render() {
        return (
        <div className="condiv">
            <h1 className="subtopic">
                My Education
            </h1>
            
            <WidecardEdu title="B.Tech Information Technology" 
            where="Velammal College of Engineering and Technology, Madurai" 
            from="Aug 2014" to="Apr 2018"/>
            
            <WidecardEdu title="ICSE | HSC" 
            where="Vikaasa School, Madurai" 
            from="2011" to="2014"/>
            
        </div>
        )
    }
}

export default Education;
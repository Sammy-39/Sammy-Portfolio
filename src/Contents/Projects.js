import React, { Component } from 'react';

import WidecardPro from '../Components/WidecardPro';

class Projects extends Component {
    render() {
        return (
        <div className="condiv">
            <h1 className="subtopic">
                My Projects
            </h1>
            
            <WidecardPro title="Real Time Emotion Classifier" 
            description="A CNN model that classifies human emotions based on facial reactions" 
            link="Github repo - https://github.com/Sammy-39/Real-Time-Emotion-Classifier"/>

           <WidecardPro title="Brick-Wall" 
            description="A Single page web app created using react.js to add colorful bricks to wall with add button and remove them using delete button" 
            link="Github repo - https://github.com/Sammy-39/brick-wall"/>

            <WidecardPro title="Profiles REST API" 
            description="REST API providing basic functionality for managing user profiles based on Django REST Framework" 
            link="Github repo - https://github.com/Sammy-39/profiles-rest-api"/>

            <WidecardPro title="Machstatz Flask API" 
            description="A flask API service that queries and returns the result and an excel report of the data consumed at https://assignment-machstatz.herokuapp.com/excel" 
            link="Github repo - https://github.com/Sammy-39/Machstatz_BackendAPI"/>
            
        </div>
        )
    }
}

export default Projects;
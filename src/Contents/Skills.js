import React, { Component } from 'react'

class Skills extends Component {
    constructor(props){
        super(props);
        this.state={
            'myskills':['C++','Python','React JS','JavaScript','Django','Flask']
        };
    }
    
    render() {
        return (
        <div className="condiv skills">
            <h1 className="subtopic">
                My Skills
            </h1>
            
            <ul>
                { this.state.myskills.map( (value) => {
                        return <li> <h4> {'->'} {value} </h4> </li> 
                        }
                    )
                }       
            </ul>
        </div> 
        )
    }
}
            
export default Skills
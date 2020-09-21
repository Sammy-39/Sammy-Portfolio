import React, { Component } from 'react';

import profilepic from '../Img/sammy-pic.jpg';

import ReactTypingEffect from 'react-typing-effect';

import Social from '../Components/Social';

class Home extends Component{
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic" alt="Loading..."/>
                
                <ReactTypingEffect className="typingeffect" 
                text={['I am Madasamy Pandiarjan','I am a Software Developer']} speed={100} eraseDelay={300}/>

                <Social />   

            </div>
        )
    }
}
export default Home;
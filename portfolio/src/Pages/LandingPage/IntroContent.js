import React from 'react';
import './IntroContent.css';
import ReactDOM from 'react-dom';


class IntroContent extends React.Component {
    render() {
        return (
            <div className="intro-text">
            Hi, I'm <span class="name">Velid </span><span class="lastname">Aganovic</span>.
            <br></br>
            A Full Stack Web Developer.

            <a href="#" onClick={() => {ReactDOM.unmountComponentAtNode(document.getElementById('root')); }}class="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Learn More
            </a>
            
        </div>
        )
    }
}

export default IntroContent;
import React from 'react';
import './IntroText.css';

function IntroText(props) {
    // size is amount of drops also needs to be adjusted in css

    function testin(){
        alert('hi')
    }
    return (
      <div className="intro-text">
            Hi, I'm <span class="name">Velid </span><span class="lastname">Aganovic</span>.
            <br></br>
            A Full Stack Web Developer.

            <a href="#" onClick={() => { testin() }}class="animated-button1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Learn More
            </a>
            
        </div>
    )
  }

  export default IntroText;
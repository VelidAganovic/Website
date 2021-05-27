import React from 'react';
import './IntroText.css';

function IntroText(props) {
    // size is amount of drops also needs to be adjusted in css
    return (
      <div className="intro-text">
            Hi, I'm <span class="name">Velid </span><span class="lastname">Aganovic</span>.
            A Full Stack Web Developer
      </div>
    )
  }

  export default IntroText;
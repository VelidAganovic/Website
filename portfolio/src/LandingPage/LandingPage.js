import React from 'react';
import './LandingPage.css';

function LandingPage(props) {
    // size is amount of drops also needs to be adjusted in css
    const size = 20;
    var indents = [];
    for (var i = 0; i < size; i++) {
    indents.push(<div class="line"></div>);
    }
    return (
      <div className="App">
          <div class="lines">
            {indents}
        </div>
        <h1>Hi! I'm Velid Aganovic, a Full-Stack Web Developer</h1> 
      </div>
    )
  }

  export default LandingPage;
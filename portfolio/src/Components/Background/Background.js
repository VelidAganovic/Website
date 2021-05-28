import React from 'react';
import './Background.css';

function Background(props) {
    // size is amount of drops also needs to be adjusted in css
    const size = 3;
    var lines = [];
    for (var i = 0; i < size; i++) {
    lines.push(<div class="line"></div>);
    }
    return (
      <div className="background">
        <div class="lines">
          {lines}
          </div>
        </div>
    )
  }

  export default Background;
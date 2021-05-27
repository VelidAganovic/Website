import React from 'react';
import './Background.css';

function Background(props) {
    // size is amount of drops also needs to be adjusted in css
    const size = 3;
    var indents = [];
    var indents2 = [];
    for (var i = 0; i < size; i++) {
    indents.push(<div class="line"></div>);
    }
    return (
      <div className="background">
        <div class="lines">
          {indents}
          </div>
        </div>
    )
  }

  export default Background;
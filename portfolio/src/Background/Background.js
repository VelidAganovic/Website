import React from 'react';
import './Background.css';

function Background(props) {
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
      </div>
    )
  }

  export default Background;
import React from 'react';
import '../Styles/TimelineLeft.css';

const TimelineLeft = (child) => {
    return (
        <div className="content2">
          
          <div className="textbox">
            <h2>{child.title}</h2>
            <p>{child.para}</p>
          </div>
          <div className="span">
            <div className="dot2"></div>
            <div className="line"></div>
          </div>
          
          
        </div>
    );
};

export default TimelineLeft;
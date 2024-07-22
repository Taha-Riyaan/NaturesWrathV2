import React from 'react';
import '../Styles/TimelineRight.css';

const TimelineRight = (child) => {
    return (
        <div className="timelineright-content2">
          
          <div className="timelineright-span">
            <div className="timelineright-dot2"></div>
            <div className="timelineright-line"></div>
          </div>
          <div className="timelineright-textbox">
          <h2>{child.title}</h2>
          <p>{child.para}</p>
          </div>
          
          
          
        </div>
    );
};

export default TimelineRight;
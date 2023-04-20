import React from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';

function Timeline() {
  return (
    <div className='timeline'>
        <div className='timeline__left'>Timeline</div>
        <div className='timeline_right'>
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline
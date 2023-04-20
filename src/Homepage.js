import React from 'react'
import Navigation from './Navigation/Navigation';
import Timeline from './Timeline/Timeline';
import "./Homepage.css";

function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage__nav'>
         <Navigation />
        </div>
        <div className='homepage__time'>
          <Timeline />  
        </div>
    </div>
  )
}

export default Homepage
import React from 'react'
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="about">
      <div className="aboutText">
        <h1>Why Wander?</h1>
        <hr className="line"></hr>
        <br/>
        <p>The inspiration behind this website lies behind my passion for exploring the outdoors. Often people think that to travel or to explore means going to another country, maybe spending a lot of money on flights, hotels, transportation, etc. Which could be the case...but doesn't have to be. I'm a strong believer in affordable travel/exploration and created this site with the hope that it encourages people to get out there and get going. 
        <br/>
        <br/>
        Let's adventure...
        </p>
        <p>
          Begin with logging in, which gives you the ability to add parks of interest to a list that you can come back to later. Then head to <Link className='aboutLink' to='/park-list'>Park List</Link> and look up some parks to read more about. Finally, add them to your personal list.
        </p>
      </div>
    </div>
  )
}

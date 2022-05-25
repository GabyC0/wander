import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="home">
        <div>
            <h2 className="topH2">SEEK ADVENTURES.</h2>
            <h2 className="bottomH2">EXPLORE DESTINATIONS.</h2>
        </div>
        <div>
            <h3>National Park Search Tool</h3>
        </div>
        <div className="btnDiv">
        {/* Future dev: add search icon to nav*/}
          <Link className='homeBtn' to='/search'><button>DISCOVER ALL</button></Link>
        </div>
    </div>
  )
}

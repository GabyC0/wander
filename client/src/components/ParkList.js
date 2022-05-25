import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet } from 'react-router-dom'
import {Search} from './Search'

export const ParkList = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("/api/parksInfo")
    .then((response) => response.json())
    .then(parks => {
      setParks(parks.data);
    })
  }, []);

  return (
    <div className="parkList">
      <Search/>
      <div className="parkListBack">
      <h1 className="listH2">PARK LIST</h1>
      <hr className="line"></hr>
      <br></br>
          <div className="listText">
            {parks.map(park =>
              <Link className="listLink" to={`/park-list/${park.parkCode}`}>
                <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <h4><b>{park.fullName}</b></h4>
                    </li> 
                    <span>Park Code: {park.parkCode}</span>  <span>State: {park.states}</span>
                    
                    <hr/>
                    </ul>
              </Link>
            )}
          </div>
        <Outlet/>
        </div>
    </div>
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet } from 'react-router-dom'
import {Search} from './Search'

export const ParkList = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("/api/parksInfo")
    //`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`
    .then((response) => response.json())
    .then(parks => {
      setParks(parks.data);
      console.log("here are park names", parks);
      console.log("park code ", parks.data);
    })
  }, []);

  return (
    <div className="parkList">
      <Search/>
      <div className="parkListBack">
      <h1 className="listH2">PARK LIST</h1>
          <div className="listText">
            {parks.map(park =>
              <Link to={`/park-list/${park.parkCode}`}>
                <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <h4><b>{park.fullName}</b></h4>
                    {/* <br/>
                    <br/> */}
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

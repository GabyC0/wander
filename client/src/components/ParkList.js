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
      <h1 className="listH2">Park List</h1>
          <div >
          {/* <div className="search">            
          </div> */}
          {/* Add a filter by state */}
            {parks.map(park =>
              <Link to={`/park-list/${park.parkCode}`}>
                <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <b>{park.name} </b>
                    <br/>
                    Park Code: {park.parkCode}   State: {park.states}
                    </li> 
                    <hr/>
                    </ul>
              </Link>
            )}
          </div>
        <Outlet/>
    </div>
  )
}

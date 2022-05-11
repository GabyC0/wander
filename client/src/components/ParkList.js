import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet } from 'react-router-dom'

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
    <div>
      <h1>Park List</h1>
          <div className="parkList">
          <div className="search">            
          </div>
            {parks.map(park =>
              <Link to={`/park-list/${park.parkCode}`}>
                <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <b>{park.name} {park.parkCode} {park.states}
                    </b> 
                    <br/> 
                    <br/> 
                    {/* move to indiv park:
                    {park.description}
                    <br/>
                    <br/>
                    move to indiv park:
                    <a href={park.directionsUrl}>Directions</a>
                    <br/> */}
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

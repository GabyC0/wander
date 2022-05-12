import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const IndivPark = () => {
  let params = useParams();

  console.log('params', params);
  const [park, setPark] = useState([]);

  useEffect(() => {
    fetch(`/api/parksInfo/${params.parkCode}`)
    .then((response) => response.json())
    .then(park => {
      
      setPark(park.data[0]);
      console.log('parks in front', park.data);
      //or park.data
      //setParks(parks);
    })
  }, []);

  return (
    <div className="indivPark">
      <div>
      <h2>
      <br/>
      {park.fullName}
      </h2>
      </div>
        <div className="indivDesc"> 
            {park.description}
            <br/>
            <br/>
            <a href={park.directionsUrl}>Directions</a>
            <br/>
            *Add campsite link here*
        </div>
    </div>
  )
}

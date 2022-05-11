import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const IndivPark = () => {
  let params = useParams();

  console.log('params', params);
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(`/api/parksInfo`)
    .then((response) => response.json())
    .then(parks => {
      //console.log('parks in front', parks.data[0]);
      setParks(parks.data[0]);
    })
  }, []);

  return (
    <div>
      <h2>
      {params.parkCode}
      <b>{parks.name} {parks.states}
                    </b> 
                    <br/> 
                    <br/> 
                    move to indiv park:
                    {parks.description}
                    <br/>
                    <br/>
                    move to indiv park:
                    <a href={parks.directionsUrl}>Directions</a>
                    <br/>

      </h2>
        {/* {parks.map(park =>
          <ul className='parkList'>
                    <li className="singlePark"
                    key={park.parkCode}> 
                    <b>{params.name} {park.states}
                    </b> 
                    <br/> 
                    <br/> 
                    move to indiv park:
                    {park.description}
                    <br/>
                    <br/>
                    move to indiv park:
                    <a href={park.directionsUrl}>Directions</a>
                    <br/>
                    </li> 
                    <hr/>
                    </ul>
            )} */}
    </div>
  )
}

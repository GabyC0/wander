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
    <div>
      <h2>
      {park.fullName}
      </h2>
      {/* <div key={park.parkCode}>
        {params.name}
      </div>
      <b>{park.fullName}  */}
      
                    {/* </b>  */}
                    <br/> 
                    <br/> 
                    move to indiv park:
                    {park.description}
                    <br/>
                    <br/>
                    move to indiv park:
                    {/* <a href={park.directionsUrl}>Directions</a> */}
                    <br/>

      
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

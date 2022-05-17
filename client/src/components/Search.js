import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet } from 'react-router-dom'
//const apiKey = `${process.env.API_KEY}`;

export const Search = () => {

  const [parks, setParks] = useState([]);
  const [foundParks, setFoundParks] = useState(parks);
  const [parkName, setName] = useState('');


  //const [value, setValue] = useState(null);

  //to use in input to track each change the user types
  const [query, setQuery] = useState("");

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

   console.log(query);

   // eslint-disable-next-line array-callback-return
  //  parks.filter(park => {
  //   if(query === '') {
  //     return park;
  //   } else if (park.name.toLowerCase().includes(query.toLowerCase())) {
  //     return park;
  //   }
  //  }).map((park, index) => {
  //    <div className="box" key={index}>
  //      <p>{park.name}</p>
  //    </div>
  //  })

  const filter = (e) => {
    const keyword = e.target.value;

    if(keyword !== '') {
      const results = parks.filter((park) => {
        return park.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundParks(results);
    } else {
      setFoundParks(parks);
    }
    setName(keyword);
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    // <div className="drop-wrapper">
          <div className="parkList">
            <div className="plBack">
            {/* <div className="search"> */}
            <h2>SEARCH PARK LIST:</h2>
            <input type="search" value={parkName}placeholder="Enter Park Name" onChange={filter}/>
            <br/>
            {/* </div> */}
            <div className="parkItems">
          {foundParks && foundParks.length > 0 ? (foundParks.map((parks, index) => (
          <Link to={`/park-list/${parks.parkCode}`}>
          <li key={index}>
            <span>{parks.name}</span> 
            <br/>
            {/* <span>Park description: {parks.description}</span> */}
          </li>
          </Link>
          ))
  ) : (
    <h3>Results</h3>
  )}
      </div>
      </div>
      </div>
        
  );
}

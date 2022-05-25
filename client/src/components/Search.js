import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Search = () => {

  const [parks, setParks] = useState([]);
  const [foundParks, setFoundParks] = useState(parks);
  const [parkName, setName] = useState('');

  //to use in input to track each change the user types
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/api/parksInfo")
    .then((response) => response.json())
    .then(parks => {
      setParks(parks.data);
    })
  }, []);

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

  //Future: change css of bar

  return (
    <div className="parkList">
      <div className="plBack">
        <h2>SEARCH PARK LIST:</h2>
        <input type="search" value={parkName}placeholder="Enter Park Name" onChange={filter}/>
        <br/>
        <div className="parkItems">
          {foundParks && foundParks.length > 0 ? (foundParks.map((parks, index) => (
            <Link to={`/park-list/${parks.parkCode}`}>
              <li key={index}>
              <span>{parks.name}</span> 
              <br/>
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

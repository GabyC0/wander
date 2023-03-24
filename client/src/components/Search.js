import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Search = () => {
  const [parks, setParks] = useState([]);
  const [matchingParks, setMatchingParks] = useState(parks);
  const [parkName, setParkName] = useState("");

  //to use in input for tracking each change the user types

  useEffect(() => {
    fetch("/api/parksInfo")
      .then((response) => response.json())
      .then((parks) => {
        setParks(parks.data);
      });
  }, []);


///CODE SAMPLE START

  const filterParkNames = (e) => {
    const keyword = e.target.value;
    if (keyword === "") {
      setMatchingParks(parks);
    } else {
      const match = parks.filter((park) =>
        park.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setMatchingParks(match);
    }
    setParkName(keyword);
  };

  //CODE SAMPLE END

  //Future: change css of bar

  return (
    <div className="parkList">
      <div className="plBack">
        <h2>SEARCH PARK LIST:</h2>
        <input
          type="search"
          value={parkName}
          placeholder="Enter Park Name"
          onChange={filterParkNames}
        />
        <br />
        <div className="parkItems">
          <span>Results: </span>
          {matchingParks && matchingParks.length > 0 ? (
            matchingParks.map((parks, index) => (
              <Link to={`/park-list/${parks.parkCode}`}>
                <li key={index}>
                  <span>{parks.name}</span>
                  <br />
                </li>
              </Link>
            ))
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react'
import { useState, useEffect } from 'react'
import {Link, Outlet } from 'react-router-dom'
const apiKey = `${process.env.API_KEY}`;

export const Search = () => {

  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`)
    .then((response) => response.json())
    .then(parks => {
      setParks(parks);
    })
  }, []);

  return (
    <div className="drop-wrapper">
        <div className="drop-header"></div>
        <div className="drop-title">
        </div>
        <div className="drop-list">
            {/* list buttons below using map */}
            {/* button per park */}

        </div>
    </div>
  )
}

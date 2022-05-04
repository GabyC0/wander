import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const IndivPark = () => {
  let params = useParams();

  console.log('params', params);
  const [parks, setParks] = useState([]);

  return (
    <div>
      
    </div>
  )
}

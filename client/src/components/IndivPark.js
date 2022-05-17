import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

export const IndivPark = (props) => {
  let params = useParams();

  console.log('params', params);
  //original state for individual park
  const [park, setPark] = useState([]);

  //state of added parks
  //const [parks, setParks] = useState([])

  // const loadParks = () => {
  //   fetch("/api/userFave")
  //     .then((response) => response.json())
  //     .then(parks)
  // }

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

  const postPark = async (newPark) => {
    return fetch(`/api/parkFave/${park.parkCode}/${park.fullName}`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPark)
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log("From the post ", data);
      //props.loadParks(data);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(park.parkCode) {
      postPark(park);
    }
  };

  const [user, setUser] = useState(undefined);

    const loadUser = () => {
        fetch("/api/me")
            .then((response) => {
                if(response.status === 200){
                    return response.json()
                } else {
                    return undefined;
                }
            })
            .then(user => {
                setUser(user);
            })
    };

    useEffect(() => {
        loadUser();
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
            {user && 
            <><button type="button" onClick={handleSubmit}>ADD TO LIST</button>
            </>
          }
            <br/>
            <a href={park.directionsUrl}>Directions</a>
            <br/>
            *Add campsite link here*
        </div>
    </div>
  )
}

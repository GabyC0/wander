import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

export const IndivPark = (props) => {
  let params = useParams();

  

  //original state for individual park
  const [park, setPark] = useState([]);
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetch(`/api/parksInfo/${params.parkCode}`)
    .then((response) => response.json())
    .then(park => {
      
      setPark(park.data[0]);
      setImages(park.data[0].images)
    })
  }, [params.parkCode]);

  const postPark = async (newPark) => {
    return fetch(`/api/parkFave/${park.parkCode}/${park.fullName}`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPark)
    }).then((response) => {
      return response.json()
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

    //To add: 
    //When added to faves change the ADD TO LIST text to Added or remove the button
    //Add campsite info with own campsite page

    

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
            <>
            <button type="button" onClick={handleSubmit}>ADD TO LIST</button>
            </>
          }
            <br/>
            <a href={park.directionsUrl}>Directions</a>
            <br/>
            <br/>

        <div className="carousel">
          <h4>Park Images</h4>
          <div>
            <Carousel>
              {images.map(image => 
              <Carousel.Item interval={1800}>
                <img style={{ width: "400px" }} alt={image.alt} src={image.url}></img> 
              </Carousel.Item>
              )}
            </Carousel>
          </div>
        </div>
        </div>
    </div>
  )
}

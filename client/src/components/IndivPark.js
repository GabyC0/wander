import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap/Carousel'
import Carousel from 'react-bootstrap/Carousel';

export const IndivPark = (props) => {
  let params = useParams();

  console.log('params', params);
  //original state for individual park
  const [park, setPark] = useState([]);
  const [images, setImages] = useState([]);

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
      setImages(park.data[0].images)
      console.log('images arr', park.data[0].images)
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
            <><button type="button" onClick={handleSubmit}>ADD TO LIST</button>
            </>
          }
            <br/>
            <a href={park.directionsUrl}>Directions</a>
            <br/>
            *Add campsite link here*
            <br/>
            Images

        <div style={{ display: 'block', width: 700, padding: 30}}>
          <h4>Carousel</h4>
          <Carousel>
            {images.map(image => 
            <Carousel.Item interval={1500}>
              <img style={{ width: "400px" }} alt={image.alt} src={image.url}></img> 
            </Carousel.Item>
            )}
          </Carousel>
        </div>
          






            {/* <Carousel>
              <Carousel.Item interval={500}>
              
              {images.map(image => 
                
                  
                    <>
                    
              <div class="carousel-item active">
              <div class="carousel-slide">
                  <img style={{ width: "400px" }} alt={image.alt} src={image.url}></img>
                </div>
                </div> */}
                {/* <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption> */}
                  {/* </> */}
              {/* )} */}
              
               {/* </Carousel.Item>
             </Carousel> */}


            {/* <div class="img-container">
              <img alt="" src={park.images.map((e,i)) => 
                
                [0].url} style={{width: '500px'}}></img>
            </div> */}
            {/* {park.images[0].title} */}
            <br/>
            {/* <img alt="" src={park.images[0].url} style={{width:'500px'}}></img> */}
        </div>
    </div>
  )
}

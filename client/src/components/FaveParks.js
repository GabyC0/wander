import { useState, useEffect } from "react";
import {Link, Outlet } from 'react-router-dom'


function FaveParks(props) {

    //Original state in the parent component so the page will know when to render deleted parks
    const [parks, setParks] = useState([]);

    const loadParks = () => {
        fetch("/api/userFave")
            .then((response) => response.json())
            .then(parks => {
                setParks(parks);
                console.log("park list for user - front", parks);
            })
    }

    //Use effect hook will render the parks in the app. This will change any time that our intial state changes

    useEffect(() => {
        loadParks();
        // fetch('/api/userFave')
        //     .then((response)=> response.json())
        //     .then(parks => {
        //         setParks(parks);
        //         console.log("park list for user - front", parks);
        //     })
    }, []);


    // A function to handle the Delete funtionallity
    const onDelete = async (park) => {
        return fetch(`/api/userFave/${park.id}`, {
            method: "DELETE"
        }).then((response) => {
            if(response.ok) {
                loadParks();
            }
        })
    }


        //something to do with the params, need useParams?
        // const response = await fetch(`/api/userFave/${park.parkcode}`, {
        //     method: "DELETE"
        // });
        // console.log(response);
        //loadParks();

    //}

    // A function to handle the Add a new fave park functionality 
    //const addPark = (newPark) => {
        //console.log(newPark);
        //postStudent(newPark);
        //setParks((parks) => [...parks, newPark]);
    //}



    return (
        <div className="parks">
            <h2> Favorite Parks List </h2>
            <hr className="line"></hr>
            {/* <h3>HERE: {parks.id} </h3> */}
            <div>
                <h3>{props.fullName}</h3>
            <ul>
                {parks.map(park => 
                            <li key={park.id}>
                            <Link to={`/park-list/${park.parkcode}`}>
                            {/* {park.parkcode} */}
                            {park.parkname}
                            </Link>
                            <button className="delBtn" type="button" onClick={() => {onDelete(park)}}>REMOVE</button>
                            </li>
                    )}
                    </ul>
            </div>
            {/* <Outlet/> */}
            {/* {JSON.stringify(parks)} */}
        </div>
    );
}

export default FaveParks;
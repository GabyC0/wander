import { useState, useEffect } from "react";
import {Link } from 'react-router-dom'


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


    return (
        <div className="parks">
            <h2> Favorite Parks List </h2>
            <hr className="line"></hr>
            <div>
                <h3>{props.fullName}</h3>
            <ul>
                {parks.map(park => 
                            <li key={park.id}>
                            <Link to={`/park-list/${park.parkcode}`}>
                            {park.parkname}
                            </Link>
                            <button className="delBtn" type="button" onClick={() => {onDelete(park)}}>REMOVE</button>
                            </li>
                    )}
                    </ul>
            </div>
        </div>
    );
}

export default FaveParks;
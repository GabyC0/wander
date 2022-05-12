import { useState, useEffect } from "react";
import {Link, Outlet } from 'react-router-dom'


function FaveParks() {

    //Original state in the parent component so the page will now when to render new students
    const [parks, setParks] = useState([]);


    // const loadParks = () => {
    //     fetch("/api/faveparks")
    //         .then((response) => response.json())
    //         .then(parks => {
    //             setParks(parks);
    //         })
    // }

    useEffect(() => {
        fetch('/api/userFave')
            .then((response)=> response.json())
            .then(parks => {
                setParks(parks);
                console.log("park list for user - front", parks);
            })
    }, []);


    // A function to handle the Delete funtionallity
    // const onDelete = (park) => {
    //     return fetch(`/api/favParks/${park.code}`, {
    //         method: "DELETE"
    //     }).then((response) =>{
    //         //console.log(response);
    //         if(response.ok){
    //             loadParks();
    //         }
    //     })
    // }

    // A function to handle the Add a new Student funtionallity 
    //const addPark = (newPark) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        //setParks((parks) => [...parks, newPark]);
    //}

    // A function to update the list of students when the user edit a student 
    // const updateStudent = (savedStudent) => {
    //     setStudents((students) => {
    //         const newStudents = [];
    //         for(let student of students){
    //             if(student.id === savedStudent.id){
    //                 newStudents.push(savedStudent);
    //             } else{
    //                 newStudents.push(student);
    //             }
    //         }
    //         return newStudents;
    //     })

        // This line is just to close the form! 
       // setEditingStudentId(null);

    //}

    //A function to grab the student.id of the student that we want to edit
    // const onEdit = (park) =>{
    //     const editingId = park.code;
    //     setEditingStudentId(editingId);

    // }


    return (
        <div className="parks">
            <h2> Favorite Parks List </h2>
            {/* <h3>HERE: {parks.id} </h3> */}
            <div>
                {parks.map(park => 
                    <Link to={`/park-list/${park.parkcode}`}>
                        <ul>
                            <li key={park.id}>
                            {park.parkcode}
                            </li>
                        </ul>
                    </Link>
                    )}
            </div>
            {/* <Outlet/> */}
            {/* {JSON.stringify(parks)} */}
        </div>
    );
}

export default FaveParks;
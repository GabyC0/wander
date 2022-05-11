import { useState, useEffect } from "react";
import Form from "./Form";
import { useParams } from 'react-router-dom';

function FaveParks() {

    //Original state in the parent component so the page will now when to render new students
    const [parks, setParks] = useState([]);

    //State to hide/show on nav bar
    // const [hide, setHide] = useState(false);

    // const toggleHidden = () {
    //     setState({
    //         isHidden(false);
    //     })
    // }

    // New state to check if we are working on editing a student 
    //const [editingStudentId, setEditingStudentId] = useState(null);

    // const loadParks = () => {
    //     fetch("/api/faveparks")
    //         .then((response) => response.json())
    //         .then(parks => {
    //             setParks(parks);
    //         })
    // }

    useEffect(() => {
        fetch(`http://localhost:3001/api/user/${params.userId}`)
            .then((response)=> response.json())
            .then(parks => {
                setParks(parks);
            })
    }, []);

    // Use effect hook to render the parks in the app. This will change any time that our initial state change
    let params = useParams();

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
    // const updateStudent = (savedStudent) =>{
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
            <h2> List of Parks </h2>
            <h3>Person id: {params.userId}</h3>
            <ul>
                {parks.map((park) => {
                    // if(park.code === editingParkId){
                    //     return <Form initialPark={park} savePark={updatePark} />
                    // } else {
                        return (
                        <li key={park.code}> {park.FullName} {park.description} 
                        {/* <button type="button" onClick={() =>{onDelete(park)}}>X</button>  */}
                        {/* <button type="button" onClick={() => {onEdit(park)}}>Edit</button> */}
                        </li>
                        );
                    //}
                    }
                    )}
            </ul>
            {/* <Form savePark={addPark} /> */}
        </div>
    );
}

export default FaveParks;
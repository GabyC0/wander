const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
require("dotenv").config();
const path = require('path');
require('dotenv').config(); //??
const db = require('../server/db/db-connection.js'); 
const fetch = require("node-fetch"); 
const { auth } = require('express-openid-connect');
const apiKey = `${process.env.API_KEY}`;
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
const app = express();




const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL
};


const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(auth(config));

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});
//route for user authentication
app.get('/api/me', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    if(req.oidc.isAuthenticated()){
        console.log(req.oidc.user);
        res.json(req.oidc.user);
    } else {
        res.status(401).json({error: "Error in the auth0"});
    }
});

app.use(express.static(REACT_BUILD_DIR));

//get request from API
app.get("/api/parksInfo", cors(), async (req, res) => {
    const url = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=${apiKey}`;
    console.log("url", url);
    axios.get(url)
        .then(function (response) {
            // handle success
            console.log(response.data);
            //return response;
            res.send(response.data);
    })
        .catch(function (error) {
            // handle error
            console.log(error);
    });

});


app.get("/api/campInfo/:parkCode", cors(), async (req, res) => {
    const parkCode = req.params.parkCode;
    console.log("parkCode param", parkCode);

    const url = `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${apiKey}`;
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log("This is the api camp data: ", data);
    //     res.send(data);
    // } catch (err) {
    //     console.error("Fetch error: ", err);
    // }

    axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data);
        res.send(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
// })
})

//post request for park webcam the user is searching
// let parkCodeName;
// app.post("/api/webcam-park", (req, res) => {
//     parkCodeName = req.body.parkCode;
//     //change redirect??
//     //res.redirect("/api?webcam");
// })

app.get("/api/webcam/:parkCode", cors(), async (req, res) => {
    //is this where I should add park code to be used??? 
    const parkCode = req.params.parkCode;
    const url = `https://developer.nps.gov/api/v1/webcams?parkCode=${parkCode}&api_key=${apiKey}`;
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log("This is the webcam data: ", data);
    //     res.send(data);
    // } catch (err) {
    //     console.error("Fetch error:", err);
    // }

    axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data);
        res.send(response.data);
})
    .catch(function (error) {
        // handle error
        console.log(error);
})
    .then(function () {
        // always executed
});
})

//create the get request
app.get('/api/faveparks/:id', cors(), async (req, res) => {
    try{
        const { rows: faveparks } = await db.query('SELECT * FROM faveparks');
        res.send(faveparks);
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
    }
});

// //create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//     const newUser = { firstname: req.body.firstname, lastname: req.body.lastname }
//     console.log([newUser.firstname, newUser.lastname]);
//     const result = await db.query(
//         'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//         [newUser.firstname, newUser.lastname]
//     );
//     console.log(result.rows[0]);
//     res.json(result.rows[0]);
// });

// // delete request
// app.delete('/api/faveparks/:parkId', cors(), async (req, res) =>{
//     const parkId = req.params.parkId;
//     //console.log(req.params);
//     await db.query('DELETE FROM faveparks WHERE id=$1', [parkId]);
//     res.status(200).end();

// });

// // Put request - Update request
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//     const studentId = req.params.studentId;
//     const updateStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname }
//     //console.log(req.params);
//     // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
//     console.log(studentId);
//     console.log(updateStudent);
//     const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id = ${studentId} RETURNING *`;
//     console.log(query);
//     const values = [updateStudent.lastname, updateStudent.firstname];
//     try{
//         const updated = await db.query(query, values);
//         console.log(updated.rows[0]);
//         res.send(updated.rows[0]);
//     } catch (e){
//         console.log(e);
//         return res.status(400).json({e});
//     }
// });

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
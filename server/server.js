const express = require('express');
const cors = require('cors');
const axios = require('axios').default;
require("dotenv").config();
const path = require('path');
require('dotenv').config(); //??
const db = require('../server/db/db-connection.js'); 
const fetch = require("node-fetch"); 
const { auth } = require('express-openid-connect');
const { response } = require('express');
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
console.log('port', PORT);
app.use(cors());
app.use(express.json());
app.use(auth(config));

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    // console.log(req.oidc.isAuthenticated());
    res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});
//route for user authentication
app.get('/api/me', async (req, res) => {
    console.log(req.oidc.isAuthenticated());
    if(req.oidc.isAuthenticated()){
        console.log(req.oidc.user.email);
        const search = await db.query(
            `SELECT * FROM users WHERE email='${req.oidc.user.email}'`
        )
        console.log('search results', search.rows[0]);
        if(search.rows.length === 0) {
            const userCreated = await db.query(
                'INSERT INTO users(name,nickname, email) VALUES($1, $2, $3) RETURNING *', [req.oidc.user.name, req.oidc.user.nickname, req.oidc.user.email]
            )
            console.log('userCreated', userCreated.rows[0])
        }
        res.json(req.oidc.user);
    } else {
        res.status(401).json({error: "Error in the auth0"});
    }
});


app.use(express.static(REACT_BUILD_DIR));

//get parks list from the nps API
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

//get specific individual park information 
app.get('/api/parksInfo/:parkCode', cors(), async (req, res) => {
    const parkCode = req.params.parkCode;

    const url = `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${apiKey}`;

    axios.get(url)
    .then(function (response) {
        // handle success
        console.log('parkCode back', response.data);
        //if single item respond with single park if not an error
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




//post request for park webcam the user is searching
// let parkCodeName;
// app.post("/api/webcam-park", (req, res) => {
//     parkCodeName = req.body.parkCode;
//     //change redirect??
//     //res.redirect("/api?webcam");
// })


//get request for webcam
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
// const { requiresAuth } = require('express-openid-connect');

app.get('/api/userFave', cors(), async (req, res) => {
    if(req.oidc.isAuthenticated()) {
        const authUser = await db.query(`SELECT * FROM users WHERE email='${req.oidc.user.email}'`);
        console.log('authUser result', authUser.rows[0]);
        const userList = await db.query('SELECT * FROM faveparks  WHERE userid = $1', [authUser.rows[0].id]);
        console.log('favpark list', userList.rows);

        return res.json(userList.rows);
    }
});

//create the POST request
app.post('/api/parkFave/:parkCode/:fullName', cors(), async (req, res) => {

    const parkCode = req.params.parkCode;
    const parkName = req.params.fullName;

    const authUser = await db.query(`SELECT * FROM users WHERE email='${req.oidc.user.email}'`);
    console.log('parkCode for POST', parkCode);
    const result = await db.query(
        'INSERT INTO faveparks(userid, parkcode, parkname) VALUES($1, $2, $3) RETURNING *',
        [authUser.rows[0].id, parkCode, parkName]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);

});




// // delete request
app.delete('/api/userFave/:parkId', cors(), async (req, res) =>{

    const parkId = req.params.parkId;
    //console.log(req.params);
    await db.query(`DELETE FROM faveparks WHERE id=$1`, [parkId]);
    res.status(200).end();

});

app.get("/api/campInfo/:parkCode", cors(), async (req, res) => {
    const parkCode = req.params.parkCode;
    console.log("parkCode param", parkCode);

    const url = `https://developer.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&api_key=${apiKey}`;

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

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
//Part 1 Routes, Templates and Views

// create server.mjs file
//npm init -y creates package.json
// correct package.json
//npm i express - download express
//import express at top of page
//initialize express into a varible
// listen to express(app) at the BOTTOM


// import express at the top of page
import express from 'express';



// initialize express into a variable
const app = express();

// create port
const PORT = 3000


// add listen 
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`);
});

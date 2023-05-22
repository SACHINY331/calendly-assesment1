const express = require("express");
const cors = require('cors')

 
require ("./db/connection")

const app = express();

const port = process.env.PORT || 3000;

const ROUTERSIDE = require("./routers/Meetings")


app.use(cors());
app.use(express.json());



app.use(ROUTERSIDE);




app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
});


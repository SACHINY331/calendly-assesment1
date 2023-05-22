const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Meetings",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("connection is sucessful")
}).catch((err)=>
    console.log(err)
);
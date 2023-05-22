const express = require("express");
const router = new express.Router();
const Meeting = require("../models/Meetings");
const res = require("express/lib/response");
const cors= require('cors');
const Meetings = require("../models/Meetings");



router.use(cors());


router.post("/Meeting",async(req , res)=>{

    try{
        const user = new Meetings(req.body);
        const addMeeting = await user.save();
        res.status(201).send(addMeeting);


    }catch(e){
        res.status(400).send(e);
    }

})

// router.get('/demo',(req,res)=>{
//     res.send('hello')
// })

router.get("/Meeting",async(req,res)=>{

    try{
        const MeetingData = await Meetings.find();
        res.send(MeetingData);
    }catch(err){
        res.send(err)

    }

})

router.get("/Meeting/:id",async(req,res)=>{

    try{
        const _id = req.params.id;
        const meetingsData = await Meetings.findById(_id);
        res.send(meetingsData);

    }catch(e){
        res.send(e)
 
    }

})

router.patch("/Meeting/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const meetingUpdate = await Meetings.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(meetingUpdate)

    }catch(e){
            res.statusCode(400).send(e);
    }
})

router.delete("/Meeting/:id",async(req,res)=>{
    try{
        const value = req.params.id;
        const meetingdelet = await Meetings.findByIdAndDelete(value)
        res.send(meetingdelet)

    }catch(e){
        res.statusCode(500).send(e);
    }
})


module.exports = router;
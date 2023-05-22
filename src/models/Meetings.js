const mongoose = require("mongoose");
const validator = require("validator")


const MeetingsSchema = new mongoose.Schema({
    
    host:{
        type:String,
        required:true,
    },
    user:{
        type:String,
        required:true,
        unique:true,
    },
    
    email:{
        type:String,
        required:true,
        unique:[true,"email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")

            }
        }

        },

        phone:{
            type:Number,
            min:10,
            required:true,
            unique:true,

        },

        starttime:{
            type:Date,
            required:true,
            unique:true,
        },

        endtime:{
            type:Date,
            required:true,
            unique:true,
        }
    
})


const Meetings = new mongoose.model('Meetings',MeetingsSchema)

module.exports = Meetings;
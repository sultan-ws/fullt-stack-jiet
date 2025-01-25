const mongoose = require('mongoose');
const { type } = require('os');

const courseSchema = new mongoose.Schema(
    {
        name:String,
        slug:{
            type:String,
            unique:true
        },
        price:Number,
        duration:String,
        description:String,
        thumbnail:String,
        status:{
            type: Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false,
        collection: 'courses'
    }
);

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
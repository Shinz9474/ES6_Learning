const mongoose = require('mongoose')

//Collection in MongoDB is like table
//Documents are like rows in a table

mongoose.connect('mongodb://localhost/playground') //This returns a promise
.then(()=>console.log('Connected to Mongoose'))
.catch((error)=>console.error('Error while connecting to MongoDB', error))

//We have Schemas in mongoose(not part to MongoDB). We use schema to define the structure of a document in mongodb
const courseschema = new mongoose.Schema({
    name : String,
    author : String,
    tags : [ String ],
    date : { type : Date, default : Date.now },
    ispublished : Boolean
})
/*
Datatypes for mongoose:
 - String
 - Number
 - Date
 - Buffer
 - Boolean
 - ObjectID
 - Array
 */

 mongoose.model('Course', courseschema) //1st arg: singular name for the collection name
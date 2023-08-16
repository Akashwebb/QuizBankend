const mongoose = require("mongoose")

const Schema=mongoose.Schema

const Quiz=new Schema({
    author:String,
    one:String,
    two:String,
    three:String,
    four:String,
    five:String,
    six:String,
    seven:String,
    eight:String,
    nine:String,
    ten:String,
    count:Number
    

    
}, {timestamps:true} )

const model=mongoose.model("quiz",Quiz)
module.exports=model
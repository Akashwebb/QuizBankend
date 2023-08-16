const express=require("express")
const app=express()
const mongoose=require("mongoose")
const path=require("path")

// cross origin resource sharing  
const cors = require('cors')
app.use(cors())

//body parser
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// const uri = ;
// mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://akashkumarsingh2727:akash@cluster0.7vnmqhl.mongodb.net/?retryWrites=true&w=majority`)



const schma=require("./schema/schema")


app.get("data", async (req,res)=>{
     try{
         const data= await schma.find()
          res.status(200).json({
         status:"yes",
         data
     })
     }catch(e){
         res.status(400).json({
             status:"no",
             message:e.message
         })
     }
 })


app.post("/post",async (req,res)=>{
     const {author,one,two,three,four,five,six,seven,eight,nine,ten}=req.body
           console.log(author,one)
              try{
                  const value=await schma.create({
                      author:author,
                      one : one ,
                      two : two ,
                      three : three,
                      four:four,
                      five:five,
                      six : six,
                      seven:seven,
                      eight:eight,
                      nine:nine,
                      ten:ten

                  })
                  console.log(value)
                  res.json({
                     message:"all good",
                     value
                  })
              }
              catch(e){
                 res.status(400).json({
                     status:"no",
                     message:e.message
                 })
             }
         })
    
app.get("*",(req,res)=>{
     res.send("page not found")
})

app.listen(3001, ()=>{console.log("server is up")})

const express=require("express");

const cors = require("cors");

const bodyParser=require("body-parser");
const path=require("path");

const app=express();

app.use(cors());

//to parse URL-encoded & JSON data 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//to serve static files
app.use(express.static(__dirname));

//route to serve home.html
app.get("/",(req,res)=>{
  res.sendFile(path.join(__dirname,"home.html"));
});

  //route to serve search.html
  app.get("/search",(req,res)=>{
    res.sendFile(path.join(__dirname,"search.html"));
  });

  //route to serve fundraiser.html
  app.get("/fundraiser",(req,res)=>{
    res.sendFile(path.join(__dirname,"fundraiser.html"));
  });

  //route to serve home.html

  app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,"home.html"));
  });


  //localhost, pory 8080
app.listen(8080,()=>{
  console.log("Running in 8080"); //if connection successful, console retrieve this message
 
});



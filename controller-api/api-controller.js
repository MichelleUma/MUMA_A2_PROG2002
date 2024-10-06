var dbcon = require("../database");

var connection = dbcon.getconnection();
connection.connect();
var express = require('express');
var router = express.Router();


//GET API retrieving fundraiser + category tables joining both tables using category id
router.get("/", (req, res)=>{
	connection.query("SELECT FUNDRAISER_ID, ORGANISER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_NAME FROM fundraiser INNER JOIN category ON fundraiser.CATEGORY_ID = category.CATEGORY_ID" , (err, records,fields)=> {
		 if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})

//GET API to get the category function. This retrieves the Category name from corwdfunding db
router.get("/:category", (req, res)=>{
	connection.query("select * from category where CATEGORY_NAME="  + req.params.category, (err, records,fields)=> {
		 if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})


//GET API to get the criteria  This retrieves the Fundraiser organiser and city and well as the category name from corwdfunding db
router.get("/:criteria", (req, res)=>{
	connection.query("SELECT ORGANISER, CITY FROM fundraiser INNER JOIN category ON fundraiser.CATEGORY_ID = category.CATEGORY_ID" + req.params.criteria, (err, records,fields)=> {
		if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})


//GET API to get the id  This retrieves the Fundraiser the fundraiser ID
router.get("/:id", (req, res)=>{
	connection.query("select * from fundraiser where FUNDRAISER_ID=" + req.params.id, (err, records,fields)=>{
		if (err){
			 console.error("Error while retrieve the data");
		 }else{
			 res.send(records);
		 }
	})
})


module.exports = router;
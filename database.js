
var dbDetail = require("./crowdfunding_db-detail");
//mysql2, body-parse pkg
var mysql = require('mysql2');
var bodyParser = require('body-parser');
//module exports to db
module.exports = {
	getconnection: ()=>{
	return mysql.createConnection({
		host:dbDetail.host,
		user:dbDetail.user,
		password:dbDetail.password,
		database:dbDetail.database
	});
}
}

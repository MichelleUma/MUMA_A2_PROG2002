//mysql2 pkg
const mysql = require('mysql2');


//connects to mySQL using this connection stream
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root',
    database: 'crowdfunding_db'
  });

  //if connection sucessful, retrieve connection
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

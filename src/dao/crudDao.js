var mysql = require('mysql');
var config = require('../../config/db.json');

var connection = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database
});

connection.connect();

module.exports = {
  query: function (sql, sqlParams, callback) {
    console.log('query');
    connection.query(sql, sqlParams, function (err, result) {
      if (err) {
        throw err;
      }
      console.log('select response:', result);
      callback(result);
    });
  },
}
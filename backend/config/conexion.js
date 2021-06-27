var mysql = require('mysql')

var connection =  mysql.createConnection(
  {
      host:'104.198.62.172',
      user:'ayd',
      password: '12345678',
      database: 'ayd',
      port:3306
  }
);

connection.connect( 
  function (err) {
      if (err) {
          console.log(err);
      }else {
          console.log('Conectado a bd');
      } 
  } 
);

exports.connection = connection;
/**
 * npm install mysql
 */

var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'benchtest' 
}); 
 

function execSql(sql) {
    connection.query(sql,function (err, result) {
        if(err){
          console.log('[Execute ERROR] - ',err.message);
          return;
        }
       console.log(result);
    });
    connection.commit();
} 


connection.connect();
execSql('SELECT * FROM user');
execSql('delete from user where name="huhu" ');
execSql('update user set name="xxx" where id=1');
execSql('insert user(name) values("哈哈")');
connection.end();



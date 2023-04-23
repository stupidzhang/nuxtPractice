var express = require('express');
var router = express.Router();
const mysql = require('mysql2')
let sqlconfig = require('../config/sqlConfig')//引入配置好的数据库
let pool = mysql.createPool(sqlconfig)


const exec2 = (sql,option) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if (err) {
        //连接错误
        reject(err)
      } else{
        conn.query(sql,option,(err,result,fields)=>{              
          resolve(err,result,fields)
        });
      }
      // 当连接不再使用时，用conn对象的release方法将其归还到连接池中
      conn.release()
    })
  })
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

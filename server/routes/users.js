var express = require("express");
var fs = require("fs");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();
var mysql = require('mysql2');
let sqlconfig = require('../config/sqlConfig')//引入配置好的数据库
var connection = mysql.createConnection(sqlconfig);
connection.connect((err) => {
  if(err) throw err;
  console.log(`连接成功`)
});
//路由级别的中间件
var router = express.Router();
/* GET users listing. */
router.use("*", (req, res, next) => {
  console.log("Time:", Date.now());
  next();
});
router.get("/", function (req, res, next) {
  res.send({
    code: "000000",
    data: true,
  });
});
router.get("/searchById", (req, res) => {
  res.send({
    code: "000000",
    data: req.query ? true : false,
  });
});
router.post("/saveForm", (req, res) => {
    res.send({
      code: "000000",
      data: req.body.data,
    });
});

router.post("/uploadFile", multipartMiddleware, (req, res) => {
  const file = req.files.file;
  console.log(req, "req", file);
  if (file.name) {
    data = true;
    var path = file.path;
    var fileName =file.name;
    console.log(path, "path");
    const sql = `insert into fileTable(filePath,fileName) values ('${path}','${fileName}')`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result)
      res.send({
        code: "000000",
        data: result.insertId,
      });
    });
  }
});

router.get('/getUrlById', (req, res) => {
  let sql = `SELECT filePath FROM fileTable where id=${req.query.id}`;
  connection.query(sql, (err, result) => {
    if(err){
      console.log(err);
      res.send(`<p>err:${err}</p>`)
    }else{
      console.log(result);
       fs.readFile(result[0].filePath, "utf-8", function (err, data) {
      if (err) {
        console.log(err, "err");
        res.send("文件读取失败");
      } else {

        res.send({
          code: "000000",
          data:JSON.parse(data),
        });
      }
    });
    }
  })
})

module.exports = router;

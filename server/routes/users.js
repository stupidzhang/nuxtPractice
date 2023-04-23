var express = require("express");
var fs = require("fs");
var multipart = require("connect-multiparty");
var multipartMiddleware = multipart();

//路由级别的中间件
var router = express.Router();
var app = express();
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
  let data = false;
  if (file.name) {
    data = true;
    var path = file.path;
    console.log(path, "path");
    fs.readFile(path, "utf-8", function (err, data) {
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
});
module.exports = router;

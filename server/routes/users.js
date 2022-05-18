var express = require("express");
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
    data: req.body.data.formName,
  });
});
module.exports = router;

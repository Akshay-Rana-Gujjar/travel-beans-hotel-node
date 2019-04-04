var express = require('express');
var router = express.Router();
var CONFIG = require("../config");
var axios = require("axios");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hotel", (req, res) => {

  axios.get(`${CONFIG.API_URL}/hotel`)
    .then(function (response) {
      var data = {};

      data.hotels = response.data.result.hotel;
      
      console.log(data);

      res.render("hotel",{data});
    });



});

module.exports = router;

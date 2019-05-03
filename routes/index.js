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


router.get("/hotel/search", function(req, res){

  var query = req.query;

  console.log(query);

  axios.get(`${CONFIG.API_URL}/hotel`, {params: query})
  .then(function(response){

    var data = {};

    data.hotels = response.data.result.hotel;

    console.log(data);

    res.render("hotel_search_page",{data});
  });






  
});

module.exports = router;

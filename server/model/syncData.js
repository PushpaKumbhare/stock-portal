var express = require('express');
const axios = require('axios');
var constants = require('../constant/const');
var stockAction = require('./stockAction');

//sync stock data to db with const api
const  synStockData = () => {
  // Make a request for a stock data
  axios.get(constants.STOCK_DATA_URL)
    .then(function (response) {
      var status = response.data.marketStatus.marketStatus;
      if(status == "Open"){
        var symbols = Object.keys(response.data.data);
        //console.log(symbols);
        for(var symbol of symbols){
          stockAction.create(response.data.data[symbol]);
          //console.log(response.data.data[symbol]);
        }
      } else {
        console.log("market is closed");
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });

}

module.exports = synStockData;

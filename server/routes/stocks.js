var express = require('express');
var router = express.Router();
var stockAction = require('./../model/stockAction');
var watchlistAction = require('./../model/watchlistAction');

//get all stock data from DB
router.get('/',  async(req, res) => {
  try{
    const data = await stockAction.findAll()
    res.status(200).send(data);
  }
  catch(e){
    console.log(e)
    res.status(500).send({message: 'Server Error at get all stock'})
  }
});

//get top 5 stocks from DB
router.get('/top', async(req, res, next) => {
  try{
    const data = await stockAction.getTop()
    res.send(data);
  }
  catch(e){
    console.log(e)
    res.status(500).send({message: 'Server Error at get top 5'})
  }
});

//Search DB for stock with given pattern
router.get('/watchlist', async(req, res) => {
  try {
    const data = await watchlistAction.findAll()
    res.status(200).send(data);
  }
  catch(e){
    console.log(e)
    res.status(500).send({message: 'Server Error at get watchlist'})
  }
});

router.post('/watchlist/add', async(req, res) => {
  try {
    console.log(req);
    console.log(req.body);
    const data = await watchlistAction.create(req.body)
    res.status(200).send(data);
  }
  catch(e){
    console.log(e)
    res.status(500).send({message: 'Server Error at watchlist add'})
  }

});

router.post('/watchlist/remove', async(req, res) => {
  try {
    const data = await watchlistAction.findAll(req.body)
    res.status(200).send(data);
  }
  catch(e){
    console.log(e)
    res.status(500).send({message: 'Server Error at watchlist remove'})
  }
  
});

module.exports = router;

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WatchListAPI, WatchListAddAPI, WatchListRemoveAPI } from '../const/constants';

const FlatList = ({flatList=[], remove=false, change}) => {
    const [watchStockList, setWatchStockList] = useState([]);

    const WatchStockData = async () => {
      return await fetch(WatchListAPI)
          .then(response => response.json())
          .then(data => {
              const arr = data.map(d => d.symbol);
              setWatchStockList(arr);
          });
    }

    const addToWatchList = async (symbol) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "symbol": symbol })
        };
        await fetch(WatchListAddAPI, requestOptions)
            .then(response => response.json())
            .then(data => {
            });
        setWatchStockList([...watchStockList, symbol])
    }

    const removeFromWatchList = async (symbol) =>{
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "symbol": symbol })
      };
      await fetch(WatchListRemoveAPI, requestOptions)
            .then(response => response.json())
            .then(data => {
            });
      const arr = [...watchStockList].filter(s => s !== symbol)
      change(symbol)
      setWatchStockList(arr)
    }

    useEffect( () => {WatchStockData()},[]);

    return (
      <>
      <div class="row" key="symbol-header">

        <div class="col-sm-2" ><b>Symbol</b></div>
        <div class="col-sm-1" ><b>% Change</b></div>
        <div class="col-sm-2" ><b>Change</b></div>
        <div class="col-sm-1" ><b>Prev. Price</b></div>
        <div class="col-sm-1" ><b>LTP</b></div>
        <div class="col-sm-1" ><b>last Update Time</b></div>
      </div>
      <hr/>
      { flatList.map((data,index) => {
          if (data) {
            var textcolor = data.pChange < 0 ? "red" : "green";
            var icon = data.pChange < 0 ? <i className="bi bi-chevron-down"></i>: <i className="bi bi-chevron-up"></i>
            var isWatched = watchStockList.indexOf(data.symbol) > -1;
            var watchicon = isWatched ? <i className="bi bi-dash-circle"></i>: <i className="bi bi-plus-circle"></i>

            return (
              <>
              <div class="row" key={data.symbol}>
                  <div class="col-sm-2" style={{color:textcolor}}>{data.symbol}</div>
                  <div class="col-sm-1" style={{color:textcolor}} >{icon}&nbsp;&nbsp;{data.pChange}</div>
                  <div class="col-sm-2" style={{color:textcolor}} >{data.change}</div>
                  <div class="col-sm-1" >{data.previousClose}</div>
                  <div class="col-sm-1" >{data.lastPrice}</div>
                  <div class="col-sm-2" >{data.lastUpdateTime}</div>
                  <div class="col-sm-1" onClick={() => { isWatched ? removeFromWatchList(data.symbol) : addToWatchList(data.symbol)}}>{watchicon}</div>
              </div>
              <hr/>
              </>
            )
          }
          return null
        }
      )} 
      </>
    );
}

export default FlatList
import React, { useState, useEffect } from 'react';
import { StockListAPI } from '../const/constants';
import FlatList from '../model/FlatList';

const StockList = (props) => {
    const [searchword, setSearchword] = useState('');
    const [stockListFiltered, setStockListFiltered] = useState();
    const [stockList, setStockList] = useState([]);

    const fetchStockData = async () => {
        return await fetch(StockListAPI)
          .then(response => response.json())
          .then(data => {
                setStockList(data)
                setStockListFiltered(data)
           });
    }
    
    useEffect( () => {fetchStockData()},[]);

    const updateSearchword = async (word) => {
        const filtered = stockList.filter(stock => {
            return stock.symbol.toLowerCase().includes(word.toLowerCase())
        })
        setSearchword(word);
        setStockListFiltered(filtered);
    }

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};

    useEffect( () => {fetchStockData()},[]);

    return (
        <div className="stocklist">
            <input 
                style={BarStyling}
                key="searchbar1"
                value={searchword}
                placeholder={"search here...."}
                onChange={(e) => updateSearchword(e.target.value)}
            />
            <div className="flatlist">
                <FlatList flatList={stockListFiltered}/>
            </div>
        </div>
    );
    
}

export default StockList;
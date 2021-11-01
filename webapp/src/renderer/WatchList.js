import React, { useState, useEffect } from 'react';
import { WatchListAPI } from '../const/constants';
import FlatList from '../model/FlatList';

const WatchList = (props) => {
    const [watchStockList, setWatchStockList] = useState();

    const WatchStockData = async () => {
        return await fetch(WatchListAPI)
            .then(response => response.json())
            .then(data => {
                setWatchStockList(data);
            });
    }
    
    useEffect( () => {WatchStockData()},[]);

    return (
        <div className="stocklist">
            <div className="flatlist">
                <FlatList flatList={watchStockList} remove={true}/>
            </div>
        </div>
    );
    
}

export default WatchList;
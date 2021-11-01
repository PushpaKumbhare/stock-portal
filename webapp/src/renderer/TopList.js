import React, { useState, useEffect } from 'react';
import { TopListAPI } from '../const/constants';
import FlatList from '../model/FlatList';

const TopList = (props) => {
    const [topStockList, setWatchStockList] = useState();

    const TopStockData = async () => {
        return await fetch(TopListAPI)
            .then(response => response.json())
            .then(top => {
                setWatchStockList(top);
            });
    }

    useEffect( () => {TopStockData()},[]);

    return (
        <div className="stocklist">
            <div className="flatlist">
                <FlatList flatList={topStockList}/>
            </div>
        </div>
    );
    
}

export default TopList;
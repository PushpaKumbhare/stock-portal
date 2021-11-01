import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import StockList from './StockList';
import TopList from './TopList';
import WatchList from './WatchList';

const StockPortal = (props) => {
    return (
        <Tabs defaultActiveKey="home" id="main-tab">
            <Tab eventKey="home" title="Stocks" variant="primary">
            <StockList />
            </Tab>
            <Tab eventKey="top" title="Top Five" variant="outline-secondary">
            <TopList />
            </Tab>
            <Tab eventKey="watch" title="WatchList" variant="outline-success">
            <WatchList />
            </Tab>
        </Tabs>
    );
    
}

export default StockPortal;
const Sequelize = require('sequelize');
const db = require('./database');

const stockRec= db.define('stock_data', {
    symbol: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    identifier: {
        type: Sequelize.STRING,
        allowNull: false
    },
    open: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dayHigh: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    dayLow: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    lastPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    previousClose: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    change: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    pChange: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    yearHigh: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    yearLow: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    lastUpdateTime: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = stockRec;
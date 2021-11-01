const Sequelize = require('sequelize');
const db = require('./database');

const watchlistRec= db.define('watchlist_data', {
    symbol: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    }
}, {
    tableName: 'watchlist_data'
});

module.exports = watchlistRec;
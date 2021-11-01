const stockRec = require('./stockRec');

var stockAction = {
    findAll,
    create,
    getTop
}

async function findAll() {
    return await stockRec.findAll();
}

async function create(stock) {
    return await stockRec.upsert(stock);
}

async function getTop(){
    return await stockRec.findAll({
        order: [
            ['pChange', 'DESC'],
        ],
        limit: 5
    });
}

module.exports = stockAction;
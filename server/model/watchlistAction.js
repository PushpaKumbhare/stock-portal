const watchlistRec = require('./watchlistRec');
const stockRec = require('./stockRec');

var watchlistAction = {
    findAll: findAll,
    create: create,
    deleteById: deleteById,
}

async function findAll() {
    watches = await watchlistRec.findAll({
        attributes: ["symbol"],
        raw: true,
    })
    //console.log(watches);
    return await stockRec.findAll({
        where: {
            symbol: watches.map(u => u["symbol"]),
        }
    });
}

async function deleteById(symbol) {
    return await watchlistRec.destroy({
         where: { 
             symbol: symbol["symbol"]
        } 
    });
}

async function create(symbol) {
    var new_data = new watchlistRec(symbol);
    return await new_data.save();
}

module.exports = watchlistAction;
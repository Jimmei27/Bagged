const db = require('../model/searchModel');

const searchController = {};

searchController.getItem = (req, res, next) => {
    console.log('controller', req.body)


    let searchItem = req.body['1']

    console.log('searchitem', searchItem)
    
    const getItem = `SELECT * FROM "public"."grocerylist" WHERE product = '${searchItem}'`
    db.query(getItem)
    .then(response => {
        res.locals.item = response.rows
        //console.log('controller', res.locals.item)
        next()
    })
}

module.exports = searchController;
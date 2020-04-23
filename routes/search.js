const express = require('express');
const searchController = require('../controllers/searchController');
const router = express.Router();

router.use('/', 
  searchController.getItem,
(req, res) => {
    //console.log('search', res.locals)
  return res.status(200).send(res.locals.item)
}
);

module.exports = router;
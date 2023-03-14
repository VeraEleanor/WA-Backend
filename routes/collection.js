const express = require('express');
const router = express.Router();
const collection = require('../services/collection');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    res.json(collection.getMultiple(req.query.page));
  } catch(err) {
    console.error(`Error while getting collection `, err.message);
    next(err);
  }
});

module.exports = router;
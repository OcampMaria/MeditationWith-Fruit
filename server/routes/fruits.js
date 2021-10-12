var express = require('express');
var router  = express.Router();

var fruits_api = require('../apis/fruits_api');
var authCheck = require("../config/middleware/authCheck");

router.get('/', authCheck, fruits_api.index);

router.post('/new', authCheck, fruits_api.createFruit);

module.exports = router;
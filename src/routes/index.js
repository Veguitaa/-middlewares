var express = require('express');
var router = express.Router();
const {home, about} = require("../controllers/mainController");

/* GET home page. */
router.get('/', home);
router.get('/about', about);

module.exports = router;

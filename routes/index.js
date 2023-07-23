/* 
* simple contact form 
*/

// Imports
const express = require('express');
const indexController = require ("../controllers/index");

// create router
const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.post('/', indexController.contactCard);

module.exports = router;

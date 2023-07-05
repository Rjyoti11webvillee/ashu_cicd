var router = require("express").Router();
var testcontroller = require('../controller/test.controller');

router.get('/greetings', testcontroller.greetings);





module.exports = router;

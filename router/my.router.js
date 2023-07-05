var router = require("express").Router();
var testcontroller = require('../controller/test.controller');

router.get('/greetings', testcontroller.greetings);
router.get('/new_greetings', testcontroller.new_greetings);





module.exports = router;

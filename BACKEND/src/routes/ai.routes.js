const express = require('express');
const aiController = require('../controller/ai.controller');
const router = express.Router();

router.post("/get-review", aiController.getreview);


module.exports = router;

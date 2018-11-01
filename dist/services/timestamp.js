const express = require('express');
var router = express.Router();

router.get("/now", (req, res, next) => {
    var returnObj = {
        unix: null,
        natural: null,
        full: null
    };
    var date = new Date();
    if (!isNaN(date.getTime())) {
        returnObj.unix = date.getTime();
        returnObj.natural = date.toDateString();
        returnObj.full = date.toString();
    }
    res.send(returnObj);
});

router.get("/:query", (req, res, next) => {
    var returnObj = {
        unix: null,
        natural: null,
        full: null
    };
    var date = new Date(isNaN(req.params.query) ? req.params.query : Number(req.params.query));
    if (!isNaN(date.getTime())) {
        returnObj.unix = date.getTime();
        returnObj.natural = date.toDateString();
        returnObj.full = date.toString();
    }
    res.send(returnObj);
});

module.exports = router;
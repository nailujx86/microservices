const express = require('express');
var router = express.Router();

router.use(require('express-useragent').express());

router.get("/", (req, res, next) => {
    var retObj = {};
    retObj.ipaddress = req.ip;
    retObj.language = req.acceptsLanguages()[0];
    retObj.software = req.useragent.os;
    retObj.platform = req.useragent.platform;
    retObj.browser = req.useragent.browser;
    retObj.version = req.useragent.version;
    res.send(retObj);
});

module.exports = router;
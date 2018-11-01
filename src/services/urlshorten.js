const express = require('express');
var router = express.Router();
var request = require('request');

router.get("/:url", (req, res, next) => {
    request.post('https://api.freenom.com/v2/domain/register.xml', {
            form: {
                forward_url: req.params.url,
                email: req.query.email,
                password: req.query.password
            }
        },
        (err, resp, body) => {
            console.log(body);
            if(!err && resp.statusCode == 200) {
                body = JSON.parse(body);
                let resultObj = {};
                resultObj.domainname = body.domain[0].domainname;
                resultObj.status = body.status;
                resultObj.result = body.result;
                res.json(resultObj);
            } else {
                var err = new Error(body);
                err.status = 400;
                return next(err);
            }
        });
});

module.exports = router;
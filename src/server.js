const express = require('express');
var app = express();

app.get("/", (req, res) => {
    res.send("OK");
});

var listener = app.listen(process.env.PORT, () => {
    console.log("The app is listening on port " + listener.address().port);
});

const express = require('express');
var app = express();

app.enable('trust proxy');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("OK");
});

app.use("/shorten", require('./services/urlshorten'));
app.use("/timestamp", require('./services/timestamp'));
app.use("/aboutme", require('./services/aboutme'));

var listener = app.listen(process.env.PORT, () => {
    console.log("The app is listening on port " + listener.address().port);
});

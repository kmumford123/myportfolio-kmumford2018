const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
    // Serve up static assets (usually on heroku)
    app.use(express.static(__dirname + './public'))
}
else {
    // Serve up static assets (usually on heroku)
    app.use(express.static(path.join(__dirname, "/public")));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.sendfile(path.join(__dirname, "public/index.html"))
});


app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});
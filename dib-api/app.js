const express = require("express");

const port = process.env.PORT || 5000;
const app = express();

const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

/* Configs and routes */

const api = require("./routes/links");
const auth = require("./routes/auths");
const config = require("./config/settings");
//const session = require("./config/session");

// CORS settings
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
//app.use(express.static(path.join(__dirname, 'build')));

app.use("/api/", api); // Links router
app.use("/api/auth", auth); // User router

// Options
app.options("*", function(req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.send("OPTIONS response");
});

// 404
app.use((req, res, next) => {
    res.status(404).json({ message: "Resource not found" });
});

// Error handler
app.use(function(err, req, res, next) {
    // Locals for development errors
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // Error render
    res.status(500).json({ message: "Internal Server Error" });
});

// Login and register
app.use("/api/auth", auth);

// Session cookie temporarily disabled.
// Session initializing
/*
app.use(
    session({
        key: "u_id",
        secret: "dibsessionsecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60000
        }
    })
);

// Session middleware for checking saved cookies in browser
app.use((req, res, next) => {
    if (req.cookies.u_id && !req.session.user) {
        res.clearCookie("u_id");
    }
    next();
});

*/

// Checking logged in users
app.use;

//MongoDB
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
    config.mongo.uri,
    config.mongo.options
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Setting port
app.listen(port, function() {
    console.log("Server is running on port:", port);
});

module.exports = app;

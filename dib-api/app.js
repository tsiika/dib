const express = require("express");
const app = express();

const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

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

// DB config
const db = require("./config/settings").mongoURI;
const options = { useNewUrlParser: true };
mongoose
    .connect(
        db,
        options
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

//MongoDB

// Setting port
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port: ${port}`));

module.exports = app;

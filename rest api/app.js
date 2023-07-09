const express = require("express");
const app = express();
const router = require("./users");

app.use("/users", router);

module.exports = app;

const port = 5000;

app.listen(port, () => {
    console.log("Server starting...");
});

const express = require("express");
const tintuc = require("../controllers/tintuc.controller");

module.exports = app => {
    const router = express.Router();

    router.get("/", tintuc.findAll);

    app.use("/api/tintuc", router);
};
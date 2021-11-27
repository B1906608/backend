const express = require("express");
const cuahang = require("../controllers/cuahang.controller");

module.exports = app => {
    const router = express.Router();


    router.get("/", cuahang.findAll);

    app.use("/api/cuahang", router);
};
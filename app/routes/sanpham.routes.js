const express = require("express");
const sanpham = require("../controllers/sanpham.controller");

module.exports = app => {
    const router = express.Router();

    router.get("/", sanpham.findAll);
    router.get("/:id", sanpham.findOne);


    app.use("/api/sanpham", router);
};
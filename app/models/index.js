const mongoose = require("mongoose");
const createCuahangModel = require("./cuahang.model");
const createTintucModel = require("./tintuc.model");
const createSanphamModel = require("./sanpham.model");

const db = {};
db.mongoose = mongoose;
db.Sanpham = createSanphamModel(mongoose);
db.Tintuc = createTintucModel(mongoose);
db.Cuahang = createCuahangModel(mongoose);


module.exports = db;
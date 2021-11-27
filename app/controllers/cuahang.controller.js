const { BadRequestError } = require("../helpers/errors");
const handle = require("../helpers/promise");
const db = require("../models");
const CuaHang = db.Cuahang;

exports.findAll = async(req, res, next) => {

    const [error, documents] = await handle(
        CuaHang.find({})
    );

    if (error) {
        return next(
            new BadRequestError(
                500,
                "An error occurred while retrieving contacts"
            )
        );
    }

    return res.send(documents);
};
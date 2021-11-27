const { BadRequestError } = require("../helpers/errors");
const handle = require("../helpers/promise");
const db = require("../models");
const SanPham = db.Sanpham;


exports.findAll = async(req, res, next) => {
    const condition = {};
    const name = req.query.name;
    if (name) {
        condition.ten = { $regex: new RegExp(name), $options: "i" };
    }

    const [error, documents] = await handle(
        SanPham.find(condition)
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
exports.findOne = async(req, res, next) => {
    const condition = {
        _id: req.params.id
    };

    const [error, documents] = await handle(
        SanPham.find(condition)
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
const { BadRequestError } = require("../helpers/errors");
const handle = require("../helpers/promise");
const db = require("../models");
const TinTuc = db.Tintuc;


exports.findAll = async(req, res, next) => {

    const [error, documents] = await handle(
        TinTuc.find({})
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
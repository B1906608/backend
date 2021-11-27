const config = {
    app: {
        port: process.env.PORT || 1111
    },
    db: {
        url: "mongodb://localhost:27017/gioithieuthuoc"
    },
    jwt: {
        secret: "bangtrinh"
    }
};

module.exports = config;
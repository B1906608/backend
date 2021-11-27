module.exports = mongoose => {
    const schema = mongoose.Schema({
        ten: {
            type: String,
            required: [true, "Contact name is required"],
        },
        diachi: {
            type: String,
        },
        phone: String,
    }, { timestamps: true });

    // Replace _id with id and remove __V
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    return mongoose.model("cuahang", schema);
};
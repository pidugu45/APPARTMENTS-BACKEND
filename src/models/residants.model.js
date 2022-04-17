const mongoose = require("mongoose");

const residantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    flat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "flat",
        required: true
    },
},
    {
        versionKey: false,
        timestamps: true
    }
)

const Residants = mongoose.model("residants", residantSchema);

module.exports = Residants
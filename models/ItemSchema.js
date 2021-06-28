const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Item = mongoose.model('tasks', ItemSchema);

module.exports = Item;
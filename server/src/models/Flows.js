const mongoose = require("mongoose");

const FlowSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    difficulty: String,
    focusArea: String,
    poses: Array,
    createdAt: Date,
});

module.exports = mongoose.model("Flow", FlowSchema);
const mongoose = require("mongoose");

const FlowPosesSchema = new mongoose.Schema({
    poseExternalId: Number,
    name: String,
    orderIndex: Number,
    notes: String,
});

module.exports = mongoose.model("FlowPoses", FlowPosesSchema);
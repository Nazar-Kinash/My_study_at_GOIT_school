const mongoose = require("mongoose");

const AvatarSchema = mongoose.Schema({
	filename: { type: String, required: true },
	imagePath: { type: String },
	user: { type: String },
	size: Number,
	createAt: { type: Date, default: Date.now },
});

exports.AvatarModel = mongoose.model("Avatar", AvatarSchema);

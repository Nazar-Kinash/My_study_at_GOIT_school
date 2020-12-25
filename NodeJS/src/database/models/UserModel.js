const mongooose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../../config");

const UserSchema = mongooose.Schema({
	email: { type: String, required: true, unique: true },
	password: String,
	avatarURL: String,
	subscription: {
		type: String,
		enum: ["free", "pro", "premium"],
		default: "free",
	},
	token: String,
});

UserSchema.method("generateToken", function () {
	const data = new Date();
	data.setHours(data.getHours() + 1);
	return jwt.sign({ _id: this._id, expiresIn: data }, config.secret_key, {
		expiresIn: "1h",
	});
});

UserSchema.static("isTokenValid", function (token) {
	try {
		const { _id } = jwt.verify(token, config.secret_key);
		return _id;
	} catch (e) {
		console.warn("Token validation error", e);
		return false;
	}
});

UserSchema.pre("save", async function (next) {
	if (!this.isNew) {
		return next();
	}
	this.password = await bcrypt.hash(this.password, 6);
	return next();
});

UserSchema.method("isPasswordValid", async function (password) {
	return bcrypt.compare(password, this.password);
});

exports.UserModel = mongooose.model("User", UserSchema);

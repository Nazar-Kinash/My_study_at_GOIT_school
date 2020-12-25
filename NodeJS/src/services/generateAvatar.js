const Avatar = require("avatar-builder");
const fs = require("fs").promises;
const path = require("path");
const errorHendler = require("../errorHendler");

exports.generateAvatar = async (req, res, next) => {
	try {
		const { email } = req.body;
		const avatar = Avatar.githubBuilder(320);
		const userAvatar = await avatar.create(email).then(async (buffer) => {
			await fs.writeFile(
				path.join(process.cwd(), "tmp", `${Date.now()}.png`),
				buffer
			);
		});
		next(userAvatar);
	} catch (e) {
		errorHendler(e, req, res);
	}
};

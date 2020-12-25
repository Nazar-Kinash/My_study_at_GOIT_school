const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const fs = require("fs").promises;
const path = require("path");
const config = require("../config");
const { AvatarModel } = require("../database");

exports.minifyImage = async (req, res, next) => {
	const MIN_DIR = path.join(process.cwd(), "public", "images");
	console.log(req.user);
	try {
		const [file] = await imagemin(["tmp/" + req.file.filename], {
			destination: MIN_DIR,
			plugins: [imageminJpegtran(), imageminOptipng()],
		});

		console.log([file]);
		const { filename, path: draftPath } = req.file;

		await fs.unlink(draftPath);

		req.file = {
			...req.file,
			path: path.join(MIN_DIR, filename),
			destination: MIN_DIR,
		};
		AvatarModel.create({
			filename,
			imagePath: req.file.path,
			user: req.user._id,
		});
		next();
	} catch (error) {
		res.status(500).send({ error: error.message });
	}
};

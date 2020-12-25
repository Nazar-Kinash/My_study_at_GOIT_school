const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
	destination: path.join(process.cwd(), "tmp"),
	filename: function (req, file, cb) {
		const ext = path.parse(file.originalname).ext;
		cb(null, file.fieldname + "-" + Date.now() + ext);
	},
});

const fileSaver = multer({
	storage: storage,
});

module.exports = fileSaver;

const { UsersController } = require("../../controllers");
const express = require("express");
const { isAuthUser } = require("../../middlewares");
const router = express.Router();
const fileSaver = require("../../services/file-saver");
const { minifyImage } = require("../../middlewares");

const usersController = new UsersController();

const path = require("path");
const multer = require("multer");

router.get("/current", isAuthUser, async (req, res) => {
	const { user } = req;
	const { status, response } = await usersController.getCurrentUser(user);
	return res.status(status).send(response);
});

router.patch(
	"/",
	isAuthUser,
	fileSaver.single("avatar"),
	minifyImage,
	async (req, res) => {
		const {
			body: { subscription },
			user,
			file,
		} = req;
		const { status, response } = await usersController.updateUser(
			user,
			subscription,
			file
		);
		return res.status(status).send(response);
	}
);

module.exports = router;

const { AuthController } = require("../../controllers");
const express = require("express");
const router = express.Router();
const { requestDataValidation } = require("../../validations");
const { isAuthUser } = require("../../middlewares");
const { generateAvatar } = require("../../services/generateAvatar");

const authController = new AuthController();

router.post("/register", requestDataValidation, async (req, res) => {
	const { email, password } = req.body;
	const { status, response } = await authController.register(email, password);
	return res.status(status).send(response);
});

router.post("/login", requestDataValidation, async (req, res) => {
	const { email, password } = req.body;
	const { status, response } = await authController.login(email, password);
	return res.status(status).send(response);
});

router.post("/logout", isAuthUser, async (req, res) => {
	const user = req.user;

	const { status } = await authController.logout(user);
	return res.status(status).send();
});

module.exports = router;

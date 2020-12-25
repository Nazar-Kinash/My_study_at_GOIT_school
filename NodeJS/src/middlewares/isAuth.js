const { UserModel } = require("../database");

exports.isAuthUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization;
		if (!token) {
			return res.status(401).send({ message: "Not authorized" });
		}
		const userId = UserModel.isTokenValid(token);
		if (!userId) {
			return res.status(401).send({
				message: "Invalid token",
			});
		}
		const user = await UserModel.findOne({ _id: userId });
		req.user = user;

		next();
	} catch (e) {
		next(e);
	}
};

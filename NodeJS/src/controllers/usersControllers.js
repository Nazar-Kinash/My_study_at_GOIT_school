const { UserModel } = require("../database");
const fs = require("fs").promises;
const path = require("path");
const config = require("../config");

module.exports = class UsersController {
	async getCurrentUser(user) {
		return {
			status: 200,
			response: { email: user.email, subscription: user.subscription },
		};
	}

	async updateUser(user, subscription, file) {
		file;
		try {
			if (
				subscription === "free" ||
				subscription === "pro" ||
				subscription === "premium" ||
				file
			) {
				const update = {};
				if (file) {
					const ext = path.parse(file.filename).ext;
					console.log(file);
					update.avatarURL = `http://localhost:${config.port}/images/${file.filename}`;
				}
				update.subscription = subscription;
				await UserModel.findByIdAndUpdate(user._id, update);
				const updatedUser = await UserModel.findById(user._id);
				return {
					status: 200,
					response: {
						message: `Subscription changed to ${updatedUser.subscription}`,
						user: {
							_id: updatedUser._id,
							email: updatedUser.email,
							subscription: updatedUser.subscription,
							avatarURL: updatedUser.avatarURL,
						},
					},
				};
			}
			return {
				status: 400,
				response: {
					message: "Possible sabscription options: free, premium and pro",
				},
			};
		} catch (error) {
			return { status: 500, response: { message: error.message } };
		}
	}
};

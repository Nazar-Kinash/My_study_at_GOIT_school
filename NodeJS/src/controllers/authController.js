const { UserModel, AvatarModel } = require("../database");
const Avatar = require("avatar-builder");
const fs = require("fs").promises;
const path = require("path");
const config = require("../config");

module.exports = class AuthController {
	async register(email, password) {
		try {
			const user = await UserModel.findOne({ email });
			if (user) {
				return { status: 409, response: { message: "Email in use" } };
			}
			const avatar = Avatar.githubBuilder(128);
			const userAvatar = await avatar.create(email);
			const avatarName = `${Date.now()}.png`;
			const avatarPath = path.join(process.cwd(), "tmp", `${avatarName}`);
			await fs.writeFile(avatarPath, userAvatar);
			const newPath = path.join(
				process.cwd(),
				"public",
				"images",
				`${avatarName}`
			);
			await fs.rename(avatarPath, newPath);
			const avatarURL = `http://localhost:${config.port}/images/${avatarName}`;
			const newUser = await UserModel.create({
				email,
				password,
				avatarURL,
			});
			await AvatarModel.create({
				filename: avatarName,
				imagePath: newPath,
				user: user._id,
			});
			console.log({
				_id: newUser._id,
				email: newUser.email,
				subscription: newUser.subscription,
				avatarURL: newUser.avatarURL,
			});
			return {
				status: 201,
				response: {
					user: {
						_id: newUser._id,
						email: newUser.email,
						subscription: newUser.subscription,
						avatarURL: newUser.avatarURL,
					},
				},
			};
		} catch (error) {
			return { status: 500, response: { message: error.message } };
		}
	}
	async login(email, password) {
		try {
			const user = await UserModel.findOne({ email });

			if (!user || !(await user.isPasswordValid(password))) {
				return {
					status: 401,
					response: { message: "Email or password is wrong!" },
				};
			}

			user.token = user.generateToken();
			await user.save();
			return {
				status: 200,
				response: {
					token: user.token,
					user: { email: user.email, subscription: user.subscription },
				},
			};
		} catch (error) {
			return { status: 500, response: { message: "Server error!" } };
		}
	}

	async logout(user) {
		const { _id } = user;
		try {
			await UserModel.findByIdAndUpdate(_id, { token: null });
			return { status: 200 };
		} catch (error) {
			return { status: 500, response: { message: "Server error!" } };
		}
	}
};

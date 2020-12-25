require("dotenv").config();
module.exports = {
	port: Number(process.env.PORT),
	mongoose: {
		connectionUrl: process.env.MONGODB_COLLECTION_URL,
	},
	secret_key: process.env.SECRET_KEY,
};

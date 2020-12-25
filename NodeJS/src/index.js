const express = require("express");
const path = require("path");
const app = express();
const config = require("./config");
const morgan = require("morgan");
const cors = require("cors");
const { contactsRouter, authRouter, usersRouter } = require("./router");
const { connection } = require("./database");
const { isAuthUser } = require("./middlewares");

async function main() {
	await connection.init();

	app.use(
		"/images",
		express.static(path.join(process.cwd(), "public", "images"))
	);

	app.use(cors());
	app.use(express.json());
	app.use(morgan("combined"));
	app.use("/auth", authRouter);
	app.use("/users", isAuthUser, usersRouter);
	app.use("/contacts", isAuthUser, contactsRouter);

	app.listen(config.port, (err) =>
		err ? console.log(err) : console.log(`Server started: ${config.port}`)
	);
}

main().catch(console.error);

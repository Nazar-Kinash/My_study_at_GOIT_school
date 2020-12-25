const Joi = require("@hapi/joi");

const schema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});
const requestDataValidation = (req, res, next) => {
	const { error, value } = schema.validate(req.body);
	if (error) {
		return res
			.status(400)
			.send({ message: error.details.map((el) => el.message) });
	}
	return next();
};

exports.requestDataValidation = requestDataValidation;

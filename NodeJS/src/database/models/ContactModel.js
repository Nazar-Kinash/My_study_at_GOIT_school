const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const ContactSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	subscription: {
		type: String,
		enum: ["free", "pro", "premium"],
		default: "free",
	},
	password: { type: String, required: true },
	token: { type: String, default: "" },
});
ContactSchema.plugin(mongoosePaginate);
const ContactModel = mongoose.model("Contact", ContactSchema);
exports.ContactModel = ContactModel;

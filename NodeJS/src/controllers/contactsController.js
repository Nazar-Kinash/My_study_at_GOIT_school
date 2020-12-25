const { ContactModel } = require("../database");
const { post } = require("../router/public/authRouter");

module.exports = class ContactsController {
	async getContacts({ page, limit, sub }) {
		try {
			if (sub) {
				const contacts = await ContactModel.find({ subscription: sub });
				return { status: 200, response: contacts };
			}
			const options = {
				page: 1,
				limit: 10,
			};

			if (page) options.page = page;
			if (limit) options.limit = limit;

			const contacts = await ContactModel.paginate({}, options);
			console.log(contacts);
			return { status: 200, response: contacts };
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				response: {
					message: error.message,
				},
			};
		}
	}

	async getContactById(id) {
		try {
			const contact = await ContactModel.findById(id);
			console.log(contact);
			return contact
				? { status: 200, response: contact }
				: { status: 404, response: { message: "Not Found" } };
		} catch (error) {
			console.error(error);
			return {
				status: 500,
				response: {
					message: error.message,
				},
			};
		}
	}

	async addContact(body) {
		try {
			const newContact = await ContactModel.create(body);
			console.log(newContact);
			return { status: 200, response: newContact };
		} catch (error) {
			console.log(error);
			return {
				status: 500,
				response: {
					message: error.message,
				},
			};
		}
	}

	async removeContact(id) {
		try {
			const resalt = await ContactModel.findByIdAndDelete(id);
			console.log(resalt);
			return resalt
				? {
						status: 200,
						response: { message: "Contact deleted", deletedContact: resalt },
				  }
				: { status: 404, response: { message: "Not found" } };
		} catch (error) {
			console.log(error);
			return { status: 400, response: { message: error.message } };
		}
	}

	async updateContact(id, body) {
		try {
			const contact = await ContactModel.findByIdAndUpdate(
				id,
				{ $set: body },
				{ new: true }
			);
			console.log(contact);
			return contact
				? { status: 200, response: contact }
				: { status: 404, response: { message: "Not Found" } };
		} catch (error) {
			console.log(error);
			return { status: 400, response: { message: error.message } };
		}
	}
};

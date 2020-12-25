const { ContactsController } = require("../../controllers");
const express = require("express");

const contactsController = new ContactsController();
const router = express.Router();

router.get("/", async (req, res) => {
	const { status, response } = await contactsController.getContacts(req.query);
	return res.status(status).send(response);
});

router.get("/:contactId", async (req, res) => {
	const {
		params: { contactId },
	} = req;
	const { status, response } = await contactsController.getContactById(
		contactId
	);
	return res.status(status).send(response);
});

router.post("/", async (req, res) => {
	const { body } = req;
	const { status, response } = await contactsController.addContact(body);
	return res.status(status).send(response);
});

router.delete("/:contactId", async (req, res) => {
	const {
		params: { contactId },
	} = req;
	const { status, response } = await contactsController.removeContact(
		contactId
	);
	return res.status(status).send(response);
});

router.patch("/:contactId", async (req, res) => {
	const {
		body,
		params: { contactId },
	} = req;
	const { status, response } = !!Object.values(body).length
		? await contactsController.updateContact(contactId, body)
		: { status: 400, response: { message: "missing fields" } };
	return res.status(status).send(response);
});

module.exports = router;

//Code
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

//Components
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import Alert from "../../common/Alert/Alert";
//Instruments
import { validate } from "./validate";
import { asyncAddContact } from "../../redux/contacts/contactsAction";
//Styles
import formStyles from "./CreateForm.module.css";
import TransitionWrapper from "../TransitionWeapper/TransitionWrapper";

const CreateForm = () => {
	const dispatch = useDispatch();
	const contactsList = useSelector((state) => state.contacts);

	const formik = useFormik({
		initialValues: {
			name: "",
			number: "",
		},
		onSubmit: (values) => {
			if (isAlredyInContacts(values)) {
				return;
			}
			dispatch(asyncAddContact(values));
			formik.handleReset();
		},

		validate,
	});

	const [massage, setMassage] = useState("");
	const isAlredyInContacts = (newContact) => {
		if (
			contactsList.find(({ name }) => name.trim() === newContact.name.trim())
		) {
			setMassage(`${newContact.name} is alredy in contacts`);
			setTimeout(() => {
				setMassage("");
			}, 3000);
			return true;
		}
	};

	return (
		<>
			<TransitionWrapper action={!!massage} time={250} clases="alert">
				<Alert setMassage={setMassage} text={massage} />
			</TransitionWrapper>
			<form
				className={formStyles["contact-form"]}
				autoComplete="off"
				onSubmit={formik.handleSubmit}
			>
				<Input
					value={formik.values.name}
					onChange={formik.handleChange}
					type="text"
					name="name"
					placeholder="Name"
					labelText="Name"
				/>
				{formik.touched.name && formik.errors.name ? (
					<div className={formStyles.Notification}>{formik.errors.name}</div>
				) : null}
				<Input
					value={formik.values.number}
					onChange={formik.handleChange}
					type="tel"
					name="number"
					placeholder="Number"
					labelText="Number"
				/>
				{formik.touched.number && formik.errors.number ? (
					<div className={formStyles.Notification}>{formik.errors.number}</div>
				) : null}
				<Button type="submit" title="Add contact" />
			</form>
		</>
	);
};

export default CreateForm;

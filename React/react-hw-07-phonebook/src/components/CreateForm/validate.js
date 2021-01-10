export const validate = (values) => {
	const errors = {};

	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length < 4) {
		errors.name = "Name must have 4 symbols or more";
	}
	//  else if (contacts.find(({ name }) => name.trim() === values.name.trim())) {
	// 	errors.firstName = `${values.name} is alredy in contacts`;
	// }

	if (!values.number) {
		errors.number = "Required";
	} else if (values.number.length < 7) {
		errors.number = "Number should have at lest 7 simbols !";
	}

	return errors;
};

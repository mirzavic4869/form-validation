import { React, useState, useEffect } from "react";

const FormInput = () => {
	const initialValues = { name: "", date: "", place: "", address: "", phone: "", email: "", title: "", status: "" };
	const [formValues, setFormValues] = useState(initialValues);
	const [formErrors, setFormErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setFormErrors(validate(formValues));
		setIsSubmit(true);
	};
	useEffect(() => {
		console.log(formErrors);
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log(formValues);
		}
	}, [formErrors]);

	const validate = (values) => {
		const errors = {};
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
		if (!values.name) {
			errors.name = "Name is required!";
		}
		if (!values.place) {
			errors.place = "Place of Birth is required!";
		}
		if (!values.email) {
			errors.email = "Email is required!";
		} else if (!regex.test(values.email)) {
			errors.email = "This is not valid email format";
		}
		if (!values.phone) {
			errors.phone = "Phone is required!";
		}
		if (!values.title) {
			errors.title = "Title is required!";
		}
		if (!values.status) {
			errors.status = "Marriage status is required!";
		}
		if (!values.date) {
			errors.date = "Date of birth is required!";
		}
		if (!values.address) {
			errors.address = "Address of birth is required!";
		}
		return errors;
	};

	return (
		<div className="bg-blue-100 w-full h-screen flex">
			<div className="w-lg-2/3 h-lg-3/4 bg-white shadow-md rounded-lg m-auto">
				<div className="columns-lg-2 p-5">
					<div>
						{/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
						<form action="" onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="mr-4" htmlFor="nama">
									Nama
								</label>
								<br />
								<input name="name" type="text" placeholder="Nama" value={formValues.name} onChange={handleChange} />
							</div>
							<p className="text-red-600">{formErrors.name}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="date">
									Date of Birth
								</label>
								<br />
								<input name="date" type="date" placeholder="2018-07-22" min="1900-01-01" max="2050-12-31" />
							</div>
							<p className="text-red-600">{formErrors.date}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="place">
									Place of Birth
								</label>
								<br />
								<input name="place" type="text" placeholder="City" value={formValues.place} onChange={handleChange} />
							</div>
							<p className="text-red-600">{formErrors.place}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="adress">
									Address
								</label>
								<br />
								<input name="address" type="text" placeholder="Address" value={formValues.address} onChange={handleChange} />
							</div>
							<p className="text-red-600">{formErrors.address}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="phone">
									Phone Number
								</label>
								<br />
								<input name="phone" type="number" placeholder="Phone Number" />
							</div>
							<p className="text-red-600">{formErrors.phone}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="email">
									Email
								</label>
								<br />
								<input name="email" type="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
							</div>
							<p className="text-red-600">{formErrors.email}</p>
							<div className="mb-4">
								<label className="mr-4" htmlFor="title">
									Title
								</label>
								<br />
								<select name="title" id="title">
									<option value="">--Please choose an option--</option>
									<option value="Mr">Mr</option>
									<option value="Ms">Ms</option>
								</select>
							</div>
							<p className="text-red-600">{formErrors.title}</p>
							<div className="mb-4">
								<legend>Marriage Status</legend>
								<div className="flex mt-2">
									<div className="mr-4">
										<input name="status" type="radio" id="single" value="single" />
										<label htmlFor="huey">Single</label>
									</div>
									<div>
										<input name="status" type="radio" id="married" value="married" />
										<label htmlFor="married">Married</label>
									</div>
								</div>
							</div>
							<p className="text-red-600">{formErrors.status}</p>
							<div>
								<button className="bg-green-500 p-3 rounded-lg text-white font-bold w-full" type="submit">
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormInput;

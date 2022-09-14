import { React, useState, useEffect } from "react";
import ImagesInput from "./ImagesInput";

const FormInput = () => {
	const initialValues = { name: "", date: "", place: "", address: "", phone: "", email: "", title: "", status: "", images: "" };
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
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			setFormValues(formValues);
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
			errors.address = "Address is required!";
		}
		if (!values.images) {
			errors.images = "Image is required!";
		}
		return errors;
	};

	return (
		<div className="bg-slate-100 w-full min-h-screen flex">
			{Object.keys(formErrors).length === 0 && isSubmit ? alert("registration has been successful") : console.log("registration has failed")}
			<div className="w-3/4 lg:h-3/4  my-10  bg-white shadow-md rounded-lg mx-auto">
				{/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
				<h1 className="font-bold text-3xl lg:text-4xl text-blue-800 p-5 text-center">Form Validation</h1>
				<hr />
				<div className="lg:columns-2 p-5">
					<form onSubmit={(e) => handleSubmit(e)}>
						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="nama">
								Nama
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="name" type="text" placeholder="Nama" value={formValues.name} onChange={handleChange} />
							<p className="text-red-600">{formErrors.name}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="date">
								Date of Birth
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="date" type="date" placeholder="2018-07-22" min="1900-01-01" max="2050-12-31" onChange={handleChange} />
							<p className="text-red-600">{formErrors.date}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="place">
								Place of Birth
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="place" type="text" placeholder="City" value={formValues.place} onChange={handleChange} />
							<p className="text-red-600">{formErrors.place}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="adress">
								Address
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="address" type="text" placeholder="Address" value={formValues.address} onChange={handleChange} />
							<p className="text-red-600">{formErrors.address}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="phone">
								Phone Number
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="phone" type="number" placeholder="Phone Number" onChange={handleChange} />
							<p className="text-red-600">{formErrors.phone}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="email">
								Email
							</label>
							<br />
							<input className="border rounded-md my-2 p-2" name="email" type="email" placeholder="Email" value={formValues.email} onChange={handleChange} />
							<p className="text-red-600">{formErrors.email}</p>
						</div>

						<div className="mb-4">
							<label className="mr-4 text-blue-800 font-semibold" htmlFor="title">
								Title
							</label>
							<br />
							<select className="border rounded-md mt-2 w-20" name="title" id="title" onChange={handleChange}>
								<option value=""></option>
								<option value="Mr">Mr</option>
								<option value="Ms">Ms</option>
							</select>
							<p className="text-red-600">{formErrors.title}</p>
						</div>

						<div className="mb-4">
							<legend className="text-blue-800 font-semibold">Marriage Status</legend>
							<div className="flex mt-2">
								<div className="mr-4">
									<input name="status" type="radio" id="single" value="single" onChange={handleChange} />
									<label htmlFor="single">Single</label>
								</div>
								<div>
									<input name="status" type="radio" id="married" value="married" onChange={handleChange} />
									<label htmlFor="married">Married</label>
								</div>
							</div>
							<p className="text-red-600">{formErrors.status}</p>
						</div>

						<div className="mb-4">
							<ImagesInput />
						</div>
						<div className="justify-center flex p-5 lg:justify-self-start">
							<button className="bg-green-500 p-3 rounded-lg text-white font-bold w-full lg:w-1/3 " type="submit" onSubmit={handleSubmit}>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FormInput;

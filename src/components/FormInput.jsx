import React from "react";

const FormInput = (props) => {
	return (
		<div className="bg-blue-100 w-full h-screen flex">
			<div className="w-2/3 h-3/4 bg-white shadow-md rounded-lg m-auto">
				<div className="columns-2 p-5">
					<div>
						<form action="">
							<div className="mb-4">
								<label className="mr-4" htmlFor="nama">
									Nama
								</label>
								<input type="text" placeholder="Nama" />
							</div>
							<div className="mb-4">
								<label className="mr-4" htmlFor="date">
									Date of Birth
								</label>
								<input type="date" placeholder="2018-07-22" min="1900-01-01" max="2050-12-31" />
							</div>
							<div className="mb-4">
								<label className="mr-4" htmlFor="place">
									Place of Birth
								</label>
								<input type="text" placeholder="City" />
							</div>
							<div className="mb-4">
								<label className="mr-4" htmlFor="adress">
									Address
								</label>
								<input type="text" placeholder="Address" />
							</div>
							<div className="mb-4">
								<label className="mr-4" htmlFor="phone">
									Phone Number
								</label>
								<input type="number" placeholder="Phone Number" />
							</div>
							<div className="mb-4">
								<label className="mr-4" htmlFor="email">
									Email
								</label>
								<input type="email" placeholder="Email" />
							</div>
							<div className="mb-4">
								<label className="mr-4" for="title">
									Title
								</label>
								<select name="titles" id="title">
									<option value="">--Please choose an option--</option>
									<option value="Mr">Mr</option>
									<option value="Ms">Ms</option>
								</select>
							</div>
							<div className="mb-4">
								<legend>Marriage Status</legend>
								<div className="flex mt-2">
									<div className="mr-4">
										<input type="radio" id="single" name="marriage" value="single" checked />
										<label for="huey">Single</label>
									</div>
									<div>
										<input type="radio" id="married" name="marriage" value="married" />
										<label for="married">Married</label>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FormInput;

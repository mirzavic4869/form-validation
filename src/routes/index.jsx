import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Box from "../components/Box";
import FormInput from "../components/FormInput";
import HomePage from "../HomePage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="formvalidation" element={<FormInput />} />
				<Route path="box" element={<Box />} />
				<Route path="*" element={<div>404 Error not Found</div>} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

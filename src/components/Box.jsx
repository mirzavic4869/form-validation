import { React, useState } from "react";
import { WithRouter } from "../utils/Navigation";

const Box = () => {
	const [state, setState] = useState(false);

	const changeColor = () => {
		setState(!state);
	};
	// for (let i = 1; i <= 4; i++) {
	// 	let newDiv = document.createElement("div");
	// 	document.body.appendChild("newDiv");
	// }

	// function random(colors) {
	// 	return Math.floor(Math.random() * colors);
	// }

	// function background() {
	// 	const rnd1 = "rgb(" + random(255) + "," + random(255) + "," + random(255) + "," + random(255) + ")";
	// 	return rnd1;
	// }

	// let divs = document.querySelectorAll("div");
	// for (let i = 0; i < divs.length; i++) {
	// 	divs[i].onClick = function (e) {
	// 		e.target.style.backgroundColor = background();
	// 	};
	// }

	return (
		<div className="justify-center flex ">
			<div className={"bg-white  text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md " + (state ? "bg-red-600  text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md" : "")} onClick={changeColor}>
				Box 1
			</div>
			<div className={"bg-white-600 text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md " + (state ? "bg-green-600  text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md" : "")} onClick={changeColor}>
				Box 2
			</div>
			<div className={"bg-white  text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md " + (state ? "bg-blue-600  text-white  text-center font-bold w-full h-60  mx-2 shadow-lg rounded-md" : "")} onClick={changeColor}>
				Box 3
			</div>
		</div>
	);
};

export default WithRouter(Box);

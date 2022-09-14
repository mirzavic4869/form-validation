import "./App.css";
import { Link } from "react-router-dom";

function HomePage() {
	return (
		<div className="bg-slate-100 w-full min-h-screen  flex">
			<div className=" flex col gap-5 m-auto">
				<Link to="/box">
					<button className="bg-blue-800 rounded-md p-2 w-32 text-white font-bold">Soal 1</button>
				</Link>
				<Link to="/formvalidation">
					<button className="bg-blue-800 rounded-md p-2 w-32 text-white font-bold">Soal 2</button>
				</Link>
			</div>
		</div>
	);
}

export default HomePage;

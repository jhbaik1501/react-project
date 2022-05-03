import { Routes, Route } from "react-router-dom";

import App from "../App";
import Header from "../components/navbar/Header";
import Main from "./views/main";
import Tarot from "./views/tarot";
import Game from "./views/game";

const Router = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<App />}>
					<Route path="" element={<Main />}></Route>
					<Route path="tarot" element={<Tarot />}></Route>
					<Route path="game" element={<Game />}></Route>
				</Route>
			</Routes>
		</>
	);
};
export default Router;

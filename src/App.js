import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { RecoilRoot } from "recoil";

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Nav />
				<Routes>
					<Route path="/movie/:id" element={<Detail />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</RecoilRoot>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Warehouses } from "./pages/Warehouses/Warehouses";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="warehouses" element={<Warehouses />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import Theme from "./Theme/Theme";

function App() {
	return (
		<Theme>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="warehouses" element={<Warehouses />} />
				</Route>
			</Routes>
		</Theme>
	);
}

export default App;

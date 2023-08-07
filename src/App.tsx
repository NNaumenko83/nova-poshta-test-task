import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { Home } from "./pages/Home/Home";
import { Warehouses } from "./pages/Warehouses/Warehouses";
import { СityWarehouses } from "./pages/CityWarehouses/CityWarehouses";
import Theme from "./Theme/Theme";
import { WarehousesDetails } from "./pages/WarehouseDetails/WarehouseDetails";

function App() {
	return (
		<Theme>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="warehouses" element={<Warehouses />} />
					<Route path="warehouses/:city" element={<СityWarehouses />} />
					<Route path="warehouses/:city/:ref" element={<WarehousesDetails />} />
				</Route>
			</Routes>
			<ToastContainer />
		</Theme>
	);
}

export default App;

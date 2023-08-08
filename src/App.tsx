import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Theme from "./Theme/Theme";

const Home = lazy(() => import("./pages/Home/Home"));
const Warehouses = lazy(() => import("./pages/Warehouses/Warehouses"));
const СityWarehouses = lazy(() => import("./pages/CityWarehouses/CityWarehouses"));
const WarehousesDetails = lazy(() => import("./pages/WarehouseDetails/WarehouseDetails"));

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

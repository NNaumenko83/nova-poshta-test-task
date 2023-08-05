import { useParams } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { getWarehouseInfo } from "../../services/api/getWarehouseInfo";
import { getErrorMessage } from "../../utils/getErrorMessage";

export const WarehousesDetails = () => {
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const { city, ref } = useParams();
	console.log("ref:", ref);
	console.log("city:", city);

	useEffect(() => {
		console.log("useEffect");
		const fetchWarehouseInfo = async () => {
			setIsLoading(true);
			if (ref) {
				try {
					const warehouseInfo = await getWarehouseInfo(ref);
					console.log("warehouseInfo:", warehouseInfo);
				} catch (error) {
					setError(getErrorMessage(error));
				} finally {
					setIsLoading(false);
				}
			}
		};
		fetchWarehouseInfo();
	}, []);

	return (
		<Main>
			<h1>Warehouses details</h1>
		</Main>
	);
};

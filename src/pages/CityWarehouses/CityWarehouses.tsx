import { useParams, useSearchParams } from "react-router-dom";

import { Main } from "../../components/Main/Main";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { getWarehousesTypes } from "../../services/api";
import { getErrorMessage } from "../../utils/getErrorMessage";

export const СityWarehouses = () => {
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	console.log("searchParams:", searchParams);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { city } = useParams();
	console.log("city:", city);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesTypes();
				setWarehousesTypes(data);
				setSearchParams({ type: "all" });
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Main>
			<h1>Warehouses in city</h1>
			<UnstyledSelectControlled warehousesTypes={warehousesTypes} />
			{/* {isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>} */}
		</Main>
	);
};

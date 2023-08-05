import { useParams, useSearchParams } from "react-router-dom";

import { Main } from "../../components/Main/Main";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { getWarehousesTypes } from "../../services/api";

export const СityWarehouses = () => {
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();

	const type = searchParams.get("type");
	console.log("type:", type);

	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState("");

	const { city } = useParams();
	console.log("city:", city);

	const onChangeType = (type: string) => {
		setSearchParams({ type });
	};

	useEffect(() => {
		(async () => {
			// setIsLoading(true);
			try {
				const data = await getWarehousesTypes();
				setWarehousesTypes(data);
				if (!type) {
					setSearchParams({ type: "all" });
				} else {
					setSearchParams({ type });
				}
			} catch (error) {
				console.log("error:", error);
				// setError(getErrorMessage(error));
			} finally {
				// setIsLoading(false);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Main>
			<h1>Warehouses in city</h1>
			{warehousesTypes.length > 0 && (
				<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
			)}
			{/* {isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>} */}
		</Main>
	);
};

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
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const type = searchParams.get("type");

	const { city } = useParams();
	console.log("city:", city);

	const onChangeType = (type: string | null) => {
		const params = new URLSearchParams();
		if (type !== null) {
			params.append("type", type);
		}
		setSearchParams(params);
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			console.log("useEffect");
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
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [setSearchParams, type]);

	return (
		<Main>
			<h1>Warehouses in city</h1>
			{warehousesTypes.length > 0 && (
				<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
			)}
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>}
		</Main>
	);
};

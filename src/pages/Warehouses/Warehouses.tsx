import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import FocusOutlineInput from "../../components/Input/Input";
import { Main } from "../../components/Main/Main";
import getWarehousesTypes from "../../services/api/getWarehousesTypes";
import { TWarehouse } from "../../Types/WarehouseType";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { UnstyledSelectControlled } from "../../components/Select/Select";

export const Warehouses = () => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	console.log("warehousesTypes:", warehousesTypes);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setValue(e.target.value);
	};

	const getWarehauses = () => {
		console.log("getWarehauses");
	};

	const debouncedSendRequest = useDebouncedCallback(getWarehauses, 1000);

	useEffect(() => {
		debouncedSendRequest();
		return () => debouncedSendRequest.cancel();
	}, [value, debouncedSendRequest]);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesTypes();
				console.log("data:", data);
				setWarehousesTypes(data);
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<Main>
			<h1>Warehouses</h1>
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>ERROR....</h2>}
			<UnstyledSelectControlled warehousesTypes={warehousesTypes} />
			<FocusOutlineInput value={value} onChange={onChange} placeholder="Введіть місто" />
		</Main>
	);
};

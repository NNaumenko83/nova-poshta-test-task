import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import FocusOutlineInput from "../../components/Input/Input";
import { Main } from "../../components/Main/Main";
import getWarehousesTypes from "../../services/api/getWarehousesTypes";
import { TWarehouse } from "../../Types/WarehouseType";

export const Warehouses = () => {
	const [value, setValue] = useState("");
	const [error, setError] = useState("");
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>();
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
			try {
				const data = await getWarehousesTypes();
				console.log("data:", data);
				setWarehousesTypes(data);
			} catch (error) {
				setError(error.message);
			}
		})();
	}, []);

	return (
		<Main>
			<h1>Warehouses</h1>
			<FocusOutlineInput value={value} onChange={onChange} placeholder="Введіть місто" />
		</Main>
	);
};

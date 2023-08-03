import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

import FocusOutlineInput from "../../components/Input/Input";
import { Main } from "../../components/Main/Main";

export const Warehouses = () => {
	const [value, setValue] = useState("");

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

	return (
		<Main>
			<h1>Warehouses</h1>
			<FocusOutlineInput value={value} onChange={onChange} placeholder="Введіть місто" />
		</Main>
	);
};

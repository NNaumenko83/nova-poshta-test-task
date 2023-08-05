import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";

import FocusOutlineInput from "../../components/Input/Input";
import { Main } from "../../components/Main/Main";
import { getCitiesByName, getWarehousesTypes } from "../../services/api";
import { TWarehouse } from "../../Types/WarehouseType";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { ICities } from "../../Types/CitiesTypes";

export const Warehouses = () => {
	const [cityName, setCityName] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	const [cities, setCities] = useState<ICities>({ Addresses: [], TotalCount: 0 });
	const [choosedCity, setChoosedCity] = useState("");

	const debouncedGetCities = useDebouncedCallback(async city => {
		setIsLoading(true);
		try {
			const results = await getCitiesByName(city);
			console.log("results:", results);

			setCities(results);
		} catch (error) {
			setError(getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	}, 1000);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setChoosedCity("");
		setError("");
		setCityName(e.target.value);
		debouncedGetCities(e.target.value);
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesTypes();
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
			<FocusOutlineInput value={cityName} onChange={onChange} placeholder="Введіть місто" />
			{choosedCity && <UnstyledSelectControlled warehousesTypes={warehousesTypes} />}
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>}
			{cities.Addresses.length > 0 && (
				<div>
					{cities.Addresses.map(item => (
						<div key={item.DeliveryCity}>
							<Link to={`/warehouses/${item.DeliveryCity}`}>{item.Present}</Link>
						</div>
					))}
				</div>
			)}
		</Main>
	);
};

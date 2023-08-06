/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams, useSearchParams } from "react-router-dom";

import { Main } from "../../components/Main/Main";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { getWarehousesInCity, getWarehousesTypes } from "../../services/api";
import { getErrorMessage } from "../../utils/getErrorMessage";
import FocusOutlineInput from "../../components/Input/Input";
import { IputsWrapper } from "./CityWarehouses.styled";

interface IWarehouse {
	CityRef: string;
	Description: string;
	Ref: string;
}

export const СityWarehouses = () => {
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [warehouses, setWarehouses] = useState<IWarehouse[]>([]);

	console.log("warehouses:", warehouses);

	const type = searchParams.get("type");
	console.log("type:", type);
	const number = searchParams.get("number");
	console.log("number:", number);

	const { city } = useParams();

	const onChangeType = (type: string | null) => {
		const params = new URLSearchParams();

		if (type !== null && number !== null) {
			params.append("type", type);
			params.append("number", number);
		}
		setSearchParams(params);
	};

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setError("");
		const params = new URLSearchParams();

		const newType = type !== null ? type : "all"; // Handle null or undefined type
		params.append("type", newType);

		const newNumber = e.target.value.trim() !== "" ? e.target.value : ""; // Handle empty number
		params.append("number", newNumber);

		setSearchParams(params);
	};

	useEffect(() => {
		if (!type && !number) {
			console.log("Перший рендер");
			setSearchParams({ type: "all", number: "" });
		} else {
			setSearchParams({ type, number });
		}

		const fetchWarehousesType = async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesTypes();
				setWarehousesTypes(data);
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		if (warehousesTypes.length === 0) {
			fetchWarehousesType();
		}
	}, []);

	useEffect(() => {
		const fetchWarehouses = async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesInCity(type, city);
				setWarehouses(data);
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		if (type) {
			fetchWarehouses();
		}
	}, [type]);

	return (
		<Main>
			<h1>Warehouses in city {city}</h1>
			{warehousesTypes.length > 0 && (
				<IputsWrapper>
					<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
					<FocusOutlineInput value={number} onChange={onChange} placeholder="Введіть номер" />
				</IputsWrapper>
			)}
			{warehouses.length > 0 &&
				warehouses.map(item => (
					<div key={item.Ref}>
						<Link to={`/warehouses/${item.CityRef}/${item.Ref}`}>{item.Description}</Link>{" "}
					</div>
				))}
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>}
		</Main>
	);
};

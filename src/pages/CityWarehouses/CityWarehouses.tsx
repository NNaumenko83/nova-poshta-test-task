/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams, useSearchParams } from "react-router-dom";

import { Main } from "../../components/Main/Main";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { getWarehousesInCity, getWarehousesTypes } from "../../services/api";
import { getErrorMessage } from "../../utils/getErrorMessage";
import FocusOutlineInput from "../../components/Input/Input";
import { CityTitle, IputsWrapper } from "./CityWarehouses.styled";
import { getCityByRef } from "../../services/api/getCityByRef";
import { WarehousesList } from "../../components/WarehousesList/WarehousesList";
import { ButtonStyled } from "../../components/Button/Button";

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
	const [cityName, setCityName] = useState("");

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

		const fetchCity = async () => {
			setIsLoading(true);
			try {
				const cityData = await getCityByRef(city);
				console.log("cityData:", cityData.Description);
				setCityName(cityData.Description);
			} catch (error) {
				setCityName("");
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		fetchCity();
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
			{warehousesTypes.length > 0 && (
				<IputsWrapper>
					<CityTitle>{cityName}</CityTitle>
					<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
					<FocusOutlineInput value={number} onChange={onChange} placeholder="Номер віділення" />
				</IputsWrapper>
			)}

			{warehouses.length > 0 && <WarehousesList warehouses={warehouses} />}
			<ButtonStyled
				type="button"
				onClick={() => {
					setPage(state => state + 1);
				}}
				loading={isLoading}
				disabled={isLoading}
			>
				{!isLoading && "Більше..."}
			</ButtonStyled>
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>}
		</Main>
	);
};

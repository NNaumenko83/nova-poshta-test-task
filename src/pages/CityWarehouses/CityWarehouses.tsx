/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useSearchParams } from "react-router-dom";

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
import { useDebouncedCallback } from "use-debounce";

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
	const [cityName, setCityName] = useState("");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const type = searchParams.get("type");
	const id = searchParams.get("id");

	const { city } = useParams();

	const debouncedGetWarehouses = useDebouncedCallback(async id => {
		if (!id) {
			console.log("!id:", !id);
			const params = new URLSearchParams();
			params.append("type", type);
			params.append("id", "all");

			setSearchParams(params);
			setWarehouses([]);
			return;
		}

		setIsLoading(true);
		try {
			const results = await getWarehousesInCity(type, city, page.toString(), id);
			setWarehouses(results.data);
		} catch (error) {
			setError(getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	}, 1000);

	const onChangeType = (type: string | null) => {
		setWarehouses([]);
		const params = new URLSearchParams();

		if (type !== null && id !== null) {
			params.append("type", type);
			params.append("id", "all");
		}
		setSearchParams(params);
	};

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setError("");
		setPage(1);
		setWarehouses([]);
		const params = new URLSearchParams();
		const newType = type !== null ? type : "all";
		params.append("type", newType);
		const newId = e.target.value.trim();
		params.append("id", newId);
		setSearchParams(params);

		debouncedGetWarehouses(e.target.value);
	};

	useEffect(() => {
		if (!type && !id) {
			setSearchParams({ type: "all", id: "all" });
		} else {
			setSearchParams({ type, id });
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
		if (id && id !== "all") {
			return;
		}
		const fetchWarehouses = async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesInCity(type, city, page.toString(), id);
				console.log("data.info:", Math.ceil(data.info.totalCount / 50));
				setTotalPages(Math.ceil(data.info.totalCount / 50));

				setWarehouses(prevState => [...prevState, ...data.data]);
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		if (type) {
			fetchWarehouses();
		}
	}, [type, page, id]);

	return (
		<Main>
			{warehousesTypes.length > 0 && (
				<IputsWrapper>
					<CityTitle>{cityName}</CityTitle>
					<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
					<FocusOutlineInput value={id === "all" ? "" : id} onChange={onChange} placeholder="Номер віділення" />
				</IputsWrapper>
			)}

			{warehouses.length > 0 && <WarehousesList warehouses={warehouses} />}
			{totalPages > 0 && page !== totalPages && (
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
			)}
			{isLoading && <h2>LOADING....</h2>}
			{error && <h2>{error}</h2>}
		</Main>
	);
};

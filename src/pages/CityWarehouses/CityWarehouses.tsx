import { useParams, useSearchParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
import { useDebouncedCallback } from "use-debounce";
import { toast } from "react-toastify";

import { Main } from "../../components/Main/Main";
import { UnstyledSelectControlled } from "../../components/Select/Select";
import { useEffect, useState } from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { getWarehousesInCity, getWarehousesTypes } from "../../services/api";
import { getErrorMessage } from "../../utils/getErrorMessage";
import FocusOutlineInput from "../../components/Input/Input";
import { CityTitle, IputsWrapper, WarehousesListWrapper, WarehousesWrapper } from "./CityWarehouses.styled";
import { getCityByRef } from "../../services/api/getCityByRef";
import { WarehousesList } from "../../components/WarehousesList/WarehousesList";
import { ButtonStyled } from "../../components/Button/Button";

interface IWarehouse {
	CityRef: string;
	Description: string;
	Ref: string;
}

const СityWarehouses = () => {
	const [warehousesTypes, setWarehousesTypes] = useState<TWarehouse[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [warehouses, setWarehouses] = useState<IWarehouse[]>([]);

	const [cityName, setCityName] = useState("");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	const type = searchParams.get("type");
	const id = searchParams.get("id");

	const { city } = useParams();

	useEffect(() => {
		if (!type && !id) {
			setSearchParams({ type: "all", id: "all" });
		} else {
			const params = new URLSearchParams();
			params.append("type", type || "all");
			params.append("id", id || "all");
			setSearchParams(params);
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
				const cityData = await getCityByRef(city || "");
				setCityName(cityData.Description);
			} catch (error) {
				setCityName("");
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		fetchCity();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const fetchWarehouses = async () => {
			setIsLoading(true);
			try {
				const data = await getWarehousesInCity(type, city, page.toString(), id || "");

				setTotalPages(Math.ceil(data.info.totalCount / 50));

				setWarehouses(prevState => [...prevState, ...data.data]);
			} catch (error) {
				toast.error("Something went wrong!", {
					position: "top-center",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		};

		if (type) {
			fetchWarehouses();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type, page, id]);

	const debouncedGetWarehouses = useDebouncedCallback(async (id: string | null) => {
		if (!id) {
			const params = new URLSearchParams();
			params.append("type", type || "all");
			params.append("id", "all");

			setSearchParams(params);

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

	const onChangeType = (newType: string | null) => {
		setWarehouses([]);
		setPage(1);
		const params = new URLSearchParams();

		if (newType !== null && id !== null) {
			params.append("type", newType);
			params.append("id", "all");
		} else {
			params.append("type", newType || "all");
			params.append("id", "all");
		}
		setSearchParams(params);
	};

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setError("");
		setPage(1);
		setTotalPages(1);
		setWarehouses([]);
		const params = new URLSearchParams();
		const newType = type !== null ? type : "all";
		const newId = e.target.value.trim() ? e.target.value.trim() : "all";
		params.append("type", newType);
		params.append("id", newId);
		setSearchParams(params);

		debouncedGetWarehouses(newId);
	};

	return (
		<Main>
			{warehousesTypes.length > 0 && (
				<IputsWrapper>
					<CityTitle>{cityName}</CityTitle>
					<UnstyledSelectControlled warehousesTypes={warehousesTypes} onChangeType={onChangeType} value={type} />
					<FocusOutlineInput value={id === "all" ? "" : id || ""} onChange={onChange} placeholder="Номер відділення" />
				</IputsWrapper>
			)}
			<WarehousesWrapper>
				{isLoading && warehouses.length === 0 && (
					<MutatingDots
						height={100}
						width={100}
						color="#df012e"
						secondaryColor="#df012e"
						radius={12.5}
						ariaLabel="mutating-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				)}
				{warehouses.length > 0 && !error && (
					<WarehousesListWrapper>
						<WarehousesList warehouses={warehouses} />
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
					</WarehousesListWrapper>
				)}
			</WarehousesWrapper>
		</Main>
	);
};

export default СityWarehouses;

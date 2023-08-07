/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

import { MutatingDots } from "react-loader-spinner";

import FocusOutlineInput from "../../components/Input/Input";
import { Main } from "../../components/Main/Main";
import { getCitiesByName } from "../../services/api";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { ICities } from "../../Types/CitiesTypes";
import { CitiesListWrapper, CitiesWrapper } from "./Warehouses.styled";
import { CitiesList } from "../../components/CitiesList/CitiesList";
import { ButtonStyled } from "../../components/Button/Button";

export const Warehouses = () => {
	const [cityName, setCityName] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [cities, setCities] = useState<ICities>({ Addresses: [], TotalCount: 0 });
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);

	const debouncedGetCities = useDebouncedCallback(async city => {
		if (!city) {
			setTotalPage(1);
			setCities({ Addresses: [], TotalCount: 0 });
			return;
		}
		setIsLoading(true);
		try {
			const results = await getCitiesByName(city, page.toString());

			setTotalPage(Math.floor(results.TotalCount / 50));
			setCities(results);
		} catch (error) {
			setError(getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	}, 1000);

	const onChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		setError("");
		setPage(1);
		setCityName(e.target.value);

		debouncedGetCities(e.target.value);
	};

	useEffect(() => {
		if (!cityName) {
			return;
		}

		(async () => {
			setIsLoading(true);
			try {
				const results = await getCitiesByName(cityName, page.toString());

				setTotalPage(Math.ceil(results.TotalCount / 50));
				setCities(state => ({
					...state,
					Addresses: [...state.Addresses, ...results.Addresses],
				}));
			} catch (error) {
				setError(getErrorMessage(error));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [page]);

	return (
		<Main>
			<FocusOutlineInput value={cityName} onChange={onChange} placeholder="Введіть місто" />
			<CitiesWrapper>
				{error && <h2>{error}</h2>}
				{isLoading && cities.Addresses.length === 0 && (
					<MutatingDots
						height="100"
						width="100"
						color="#df012e"
						secondaryColor="#df012e"
						radius="12.5"
						ariaLabel="mutating-dots-loading"
						wrapperStyle={{}}
						wrapperClass=""
						visible={true}
					/>
				)}
				{cities.Addresses.length > 0 && !error && (
					<CitiesListWrapper>
						<CitiesList cities={cities} />
						{totalPage > page && (
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
					</CitiesListWrapper>
				)}
			</CitiesWrapper>
		</Main>
	);
};

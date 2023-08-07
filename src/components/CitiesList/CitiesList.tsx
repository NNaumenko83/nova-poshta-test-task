import React from "react";
import { ICities } from "../../Types/CitiesTypes";
import { Link } from "react-router-dom";
import { CityLinkWrapper } from "./CitiesList.styled";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
	display: block;
	padding: 5px;
	width: 100%;
	height: 100%;
`;

interface ICitiesListProps {
	cities: ICities;
}

export const CitiesList: React.FC<ICitiesListProps> = ({ cities }) => {
	return cities.Addresses.map(item => (
		<CityLinkWrapper key={item.Present}>
			<StyledLink to={`/warehouses/${item.DeliveryCity}`}>{item.Present}</StyledLink>
		</CityLinkWrapper>
	));
};

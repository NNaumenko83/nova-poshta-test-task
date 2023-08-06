import React from "react";
import { ICities } from "../../Types/CitiesTypes";
import { Link } from "react-router-dom";
import { WarehouseLinkWrapper } from "./CitiesList.styled";

interface ICitiesListProps {
	cities: ICities;
}

export const CitiesList: React.FC<ICitiesListProps> = ({ cities }) => {
	console.log("cities:", cities);
	return cities.Addresses.map(item => (
		<WarehouseLinkWrapper key={item.Ref}>
			<Link to={`/warehouses/${item.DeliveryCity}`}>{item.Present}</Link>
		</WarehouseLinkWrapper>
	));
};

import React from "react";
import { ICities } from "../../Types/CitiesTypes";
import { Link } from "react-router-dom";

interface ICitiesListProps {
	cities: ICities;
}

export const CitiesList: React.FC<ICitiesListProps> = ({ cities }) => {
	console.log("cities:", cities);
	return cities.Addresses.map(item => (
		<div key={item.DeliveryCity}>
			<Link to={`/warehouses/${item.DeliveryCity}`}>{item.Present}</Link>
		</div>
	));
};

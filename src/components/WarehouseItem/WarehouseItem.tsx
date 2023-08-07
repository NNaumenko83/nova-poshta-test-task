import React from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { Link } from "react-router-dom";
import { Item } from "./WarehouseItem.styled";

interface IWarehouseItemPtops {
	warehouse: TWarehouse;
}

export const WarehouseItem: React.FC<IWarehouseItemPtops> = ({ warehouse }) => {
	return (
		<Item>
			<Link to={`/warehouses/${warehouse.CityRef}/${warehouse.Ref}`}>{warehouse.Description}</Link>
		</Item>
	);
};

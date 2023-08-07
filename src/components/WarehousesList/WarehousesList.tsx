import React from "react";

import { TWarehouse } from "../../Types/WarehouseType";
import { WarehouseItem } from "../WarehouseItem/WarehouseItem";
import { WarehousesListStyled } from "./WarehousesList.styled";

interface IWarehousesListProps {
	warehouses: TWarehouse[];
}

export const WarehousesList: React.FC<IWarehousesListProps> = ({ warehouses }) => {
	return (
		<WarehousesListStyled>
			{warehouses.map((item: TWarehouse) => (
				<WarehouseItem key={item.Ref} warehouse={item} />
			))}
		</WarehousesListStyled>
	);
};

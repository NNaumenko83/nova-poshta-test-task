import React, { Children, ReactNode } from "react";

import { TWarehouse } from "../../Types/WarehouseType";
import { WarehouseItem } from "../WarehouseItem/WarehouseItem";
import { WarehousesListStyled } from "./WarehousesList.styled";

interface IWarehousesListProps {
	warehouses: TWarehouse[];
	children: ReactNode;
}

export const WarehousesList: React.FC<IWarehousesListProps> = ({ warehouses, children }) => {
	return (
		<WarehousesListStyled>
			{warehouses.map((item: TWarehouse) => (
				<WarehouseItem key={item.Ref} warehouse={item} />
			))}
			{children}
		</WarehousesListStyled>
	);
};

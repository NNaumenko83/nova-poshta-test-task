import React from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { WarehouseLinkWrapper } from "./WarehousesList.styled";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
	display: block;
	padding: 5px;
	width: 100%;
	height: 100%;
`;

interface IWarehousesListProps {
	warehouses: TWarehouse[];
}

export const WarehousesList: React.FC<IWarehousesListProps> = ({ warehouses }) => {
	return (
		<>
			{warehouses.map((item: TWarehouse) => (
				<WarehouseLinkWrapper key={item.Ref}>
					<StyledLink to={`/warehouses/${item.CityRef}/${item.Ref}`}>{item.Description}</StyledLink>
				</WarehouseLinkWrapper>
			))}
		</>
	);
};

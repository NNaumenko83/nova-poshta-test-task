import React from "react";
import { TWarehouse } from "../../Types/WarehouseType";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
	display: block;
	padding: 5px;
	width: 100%;
	height: 100%;
`;

interface IWarehouseItemPtops {
	warehouse: TWarehouse;
}

export const WarehouseItem: React.FC<IWarehouseItemPtops> = ({ warehouse }) => {
	return <StyledLink to={`/warehouses/${warehouse.CityRef}/${warehouse.Ref}`}>{warehouse.Description}</StyledLink>;
};

import { styled } from "styled-components";

export const IputsWrapper = styled.div`
	padding: 5px;
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
	gap: 10px;
`;

export const CityTitle = styled.h2`
	margin: 0 auto;
	font-size: ${props => props.theme.fontSizes.xsmall};
	text-align: center;
`;

export const WarehousesWrapper = styled.div`
	height: calc(100vh - 320px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const WarehousesListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	font-size: ${props => props.theme.fontSizes.xssmall};
	overflow: auto;
`;

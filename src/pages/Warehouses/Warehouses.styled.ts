import { styled } from "styled-components";

export const WarehousesWrapper = styled.div`
	height: calc(100vh - 240px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const WarehousesListWrapper = styled.div`
	height: 100%;
	font-size: ${props => props.theme.fontSizes.xsmall};
	overflow: auto;
`;

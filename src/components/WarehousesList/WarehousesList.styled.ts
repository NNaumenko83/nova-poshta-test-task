import { styled } from "styled-components";

export const WarehousesListStyled = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
	width: 300px;
	margin: 0 auto;
	padding: 0 5px;
	font-size: ${props => props.theme.fontSizes.xssmall};

	height: 300px;
	overflow: auto;
`;

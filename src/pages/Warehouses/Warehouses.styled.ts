import { styled } from "styled-components";

export const CitiesWrapper = styled.div`
	height: calc(100vh - 240px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`;

export const CitiesListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	font-size: ${props => props.theme.fontSizes.xssmall};
	overflow: auto;
`;

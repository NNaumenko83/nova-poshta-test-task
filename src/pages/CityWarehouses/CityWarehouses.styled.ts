import { styled } from "styled-components";

export const IputsWrapper = styled.div`
	border: 1px solid red;
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

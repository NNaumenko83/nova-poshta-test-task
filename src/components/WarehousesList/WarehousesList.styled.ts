import { styled } from "styled-components";

export const WarehousesListStyled = styled.div`
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

export const WarehouseLinkWrapper = styled.div`
	border: 1px solid ${props => props.theme.colors.secondBackGround};
	border-radius: 5px;
	background-color: ${props => props.theme.colors.fourthBacgroundCOlor};
	transition: transform 150ms linear;
	border: 1px solid ${props => props.theme.colors.borderNonActive};

	&:hover {
		border-color: ${props => props.theme.colors.secondBackGround};
		transform: scale(1.01);
	}
`;

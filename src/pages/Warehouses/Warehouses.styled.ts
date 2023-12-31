import { styled } from "styled-components";

export const CitiesWrapper = styled.div`
	height: calc(100vh - 265px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5px;
	padding: 5px 10px;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;
`;

export const CitiesListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	width: 100%;
	padding: 0 10px;

	font-size: ${props => props.theme.fontSizes.xssmall};
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.secondBackGround};
		border-radius: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${props => props.theme.colors.footerLinkSecondColor};
		border-radius: 8px;
	}

	@media screen and (min-width: 768px) {
		font-size: ${props => props.theme.fontSizes.small};
	}
`;

export const InputWrapper = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
	}
`;

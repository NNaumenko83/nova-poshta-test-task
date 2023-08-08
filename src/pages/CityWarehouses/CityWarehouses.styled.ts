import { styled } from "styled-components";

export const IputsWrapper = styled.div`
	padding: 5px;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin: 0 auto;
	gap: 10px;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 600px) {
		flex-direction: row;
		justify-content: center;
		width: 100%;
		height: 80px;
	}
`;

export const CityTitle = styled.h2`
	margin: 0 auto;
	font-size: ${props => props.theme.fontSizes.small};
	text-align: center;
	@media screen and (min-width: 600px) {
		font-size: ${props => props.theme.fontSizes.small};
		margin: 0;
	}
`;

export const WarehousesWrapper = styled.div`
	height: calc(100vh - 320px);

	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 5px;
	padding: 5px 10px;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 600px) {
		height: calc(100vh - 260px);
	}
`;

export const WarehousesListWrapper = styled.div`
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

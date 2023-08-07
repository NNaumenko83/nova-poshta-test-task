import { styled } from "styled-components";

export const IputsWrapper = styled.div`
	padding: 5px;
	width: 300px;
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
	font-size: ${props => props.theme.fontSizes.xsmall};
	text-align: center;
	@media screen and (min-width: 600px) {
		font-size: ${props => props.theme.fontSizes.small};
	}
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
	width: 100%;
	padding: 0 10px;

	font-size: ${props => props.theme.fontSizes.xssmall};
	overflow: auto;
	@media screen and (min-width: 768px) {
		font-size: ${props => props.theme.fontSizes.small};
	}
`;

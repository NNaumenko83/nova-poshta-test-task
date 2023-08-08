import { styled } from "styled-components";

export const InfoWrapper = styled.div`
	height: 100%;
	padding: 15px;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 200px, repeat(8, 1fr);

	grid-row-gap: 20px;

	font-size: ${props => props.theme.fontSizes.xssmall};

	@media screen and (min-width: 600px) {
		font-size: ${props => props.theme.fontSizes.xsmall};
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 200px repeat(3, 1fr);
	}
`;

export const CommonInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	grid-area: 1 / 1 / 2 / 3;
	@media screen and (min-width: 600px) {
		grid-area: 1 / 1 / 2 / 8;
	}
`;

export const InfoTitle = styled.h2`
	font-weight: ${props => props.theme.fontWeights.bold};
`;

export const SheduleTable = styled.div`
	grid-area: 2 / 1 / 10 / 3;

	display: grid;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 2px;
	grid-row-gap: 2px;

	@media screen and (min-width: 600px) {
		grid-area: 2 / 1 / 5 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(3, 40px);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

export const TableHeader = styled.div`
	grid-area: 1 / 1 / 2 / 3;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid ${props => props.theme.colors.borderComponents};
	font-weight: ${props => props.theme.fontWeights.bold};
	@media screen and (min-width: 600px) {
		grid-area: 1 / 1 / 2 / 8;
	}
`;

export const ColumnTableOne = styled.div`
	grid-area: 2 / 1 / 9 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 600px) {
		grid-area: 2 / 1 / 3 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

export const ColumnTableTwo = styled.div`
	grid-area: 2 / 2 / 9 / 3;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 600px) {
		grid-area: 3 / 1 / 4 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

export const TableCell = styled.div`
	padding: 5px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

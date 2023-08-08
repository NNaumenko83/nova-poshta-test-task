import { styled } from "styled-components";

export const InfoWrapper = styled.div`
	outline: 1px solid green;
	height: 100%;
	background: blue;
	font-size: ${props => props.theme.fontSizes.xsmall};

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px repeat(2, 100px) 30px 1fr;

	grid-row-gap: 5px;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(7, 1fr);
	}
`;

export const SheduleTable = styled.div`
	border: 1px solid red;
	display: grid;
	display: grid;

	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(8, 1fr);
	grid-column-gap: 2px;
	grid-row-gap: 2px;

	@media screen and (min-width: 768px) {
		grid-area: 6 / 1 / 8 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

export const TableHeader = styled.div`
	grid-area: 1 / 1 / 2 / 3;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (min-width: 768px) {
		grid-area: 1 / 1 / 2 / 8;
	}
`;

export const ColumnTableOne = styled.div`
	background: green;
	grid-area: 2 / 1 / 9 / 2;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 768px) {
		grid-area: 2 / 1 / 3 / 8;
		grid-template-columns: repeat(7, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}
`;

export const ColumnTableTwo = styled.div`
	background: purple;
	grid-area: 2 / 2 / 9 / 3;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(7, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	@media screen and (min-width: 768px) {
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
`;

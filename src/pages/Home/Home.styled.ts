import { styled } from "styled-components";

export const HomeContainer = styled.div`
	/* border: 1px solid red; */
	min-height: 100%;

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 80px 2fr 4fr;
	grid-gap: 5px;

	@media screen and (min-width: 768px) {
		grid-template-columns: 3fr 2fr;
		grid-template-rows: 80px 1fr;
	}
`;

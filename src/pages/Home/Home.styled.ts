import { styled } from "styled-components";

export const HomeContainer = styled.div`
	border: 1px solid red;

	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-template-rows: 80px 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
`;

// .div1 {  }
// .div2 { grid-area: 2 / 1 / 3 / 2; }
// .div3 { grid-area: 2 / 2 / 3 / 3; }

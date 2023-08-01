import { styled } from "styled-components";

export const SideBarStyled = styled.div`
	border: 3px solid red;
	border-radius: 20px;
	@media screen and (min-width: 768px) {
		grid-area: 2/2/3/3;
	}
`;

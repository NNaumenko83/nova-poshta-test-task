import { styled } from "styled-components";

export const SideBarStyled = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	padding: 10px;

	border: 3px solid red;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		grid-area: 2 / 2/ 3 /3;
	}
`;

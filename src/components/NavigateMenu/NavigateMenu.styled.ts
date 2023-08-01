import { styled } from "styled-components";

export const NavigateStyled = styled.nav`
	display: flex;
	flex-direction: column;
	height: 100%;
	align-items: center;
	justify-content: center;
	gap: 50px;

	@media screen and (min-width: 600px) {
		flex-direction: row;
		gap: 10px;
	}
`;

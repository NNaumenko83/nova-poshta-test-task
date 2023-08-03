import { styled } from "styled-components";

export const TrackInfoStyled = styled.div`
	padding: 20px;
	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		grid-area: 2 / 1 / 3 / 2;
	}
`;

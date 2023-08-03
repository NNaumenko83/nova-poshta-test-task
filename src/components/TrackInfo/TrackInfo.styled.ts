import { styled } from "styled-components";

export const TrackInfoStyled = styled.div`
	padding: 10px;
	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;
	font-size: ${props => props.theme.fontSizes.xsmall};
	@media screen and (min-width: 768px) {
		grid-area: 2 / 1 / 3 / 2;
		font-size: ${props => props.theme.fontSizes.small};
	}
`;

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const InfoLabel = styled.h3`
	font-weight: ${props => props.theme.fontWeights.bold};
`;

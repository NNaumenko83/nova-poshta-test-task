import { styled } from "styled-components";

export const CityLinkWrapper = styled.div`
	border: 1px solid ${props => props.theme.colors.secondBackGround};
	border-radius: 5px;
	background-color: ${props => props.theme.colors.fourthBacgroundCOlor};
	transition: transform 150ms linear;
	border: 1px solid ${props => props.theme.colors.borderNonActive};

	&:hover {
		border-color: ${props => props.theme.colors.secondBackGround};
		transform: scale(1.01);
	}
`;

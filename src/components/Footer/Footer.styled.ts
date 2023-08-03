import { styled } from "styled-components";

export const FooterStyled = styled.footer`
	background-color: ${props => props.theme.colors.secondBackGround};
`;

export const FooterContainer = styled.div`
	display: flex;
	padding: 4px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

export const Link = styled.a`
	margin: 0 auto;
	color: ${props => props.theme.colors.brightTxt};
	font-size: ${props => props.theme.fontSizes.xsmall};

	transition: color 300ms ease-in-out;

	&:hover,
	&:focus {
		color: ${props => props.theme.colors.footerLinkSecondColor};
	}

	@media screen and (min-width: 480px) {
		font-size: ${props => props.theme.fontSizes.xsmall};
	}
`;

export const FooterText = styled.p`
	font-size: 12px;
	color: ${props => props.theme.colors.brightTxt};
	@media screen and (min-width: 480px) {
		font-size: 15px;
	}
`;

export const LinkWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

import { styled } from "styled-components";

export const HeaderStyled = styled.header`
	background: ${props => props.theme.colors.secondBackGround};
	color: ${props => props.theme.colors.brightTxt};
`;

export const LogoText = styled.span`
	font-size: ${props => props.theme.fontSizes.xsmall};
`;

export const HeaderContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NavigateWrapper = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
	}
`;

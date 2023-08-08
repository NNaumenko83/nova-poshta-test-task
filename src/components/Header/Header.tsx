import { Container } from "../Container/Container";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoLink = styled(Link)`
	font-size: ${props => props.theme.fontSizes.medium};
	transition: color 200ms linear;
	&:hover {
		color: ${props => props.theme.colors.footerLinkSecondColor};
	}
`;

import { HeaderContainer, HeaderStyled, NavigateWrapper } from "./Header.styled";

import ResponsiveDrawer from "../Drawer/Drawer";
import { NavigateMenu } from "../NavigateMenu/NavigateMenu";

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<LogoLink to="/">NovaPoshta</LogoLink>
					<ResponsiveDrawer />
					<NavigateWrapper>
						<NavigateMenu />
					</NavigateWrapper>

					{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
				</HeaderContainer>
			</Container>
		</HeaderStyled>
	);
};

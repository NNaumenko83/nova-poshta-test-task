import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderStyled, LogoText } from "./Header.styled";

import { styled } from "styled-components";
import ResponsiveDrawer from "../Drawer/Drawer";

const NavLinkStyled = styled(NavLink)`
	font-size: ${props => props.theme.fontSizes.xsmall};
`;

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<LogoText>NovaPoshta</LogoText>
					<ResponsiveDrawer />
					<nav>
						<NavLinkStyled to="/">Перевірити ТТН</NavLinkStyled>
						<NavLinkStyled to="/warehouses">Список відділень</NavLinkStyled>
					</nav>
					{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
				</HeaderContainer>
			</Container>
		</HeaderStyled>
	);
};

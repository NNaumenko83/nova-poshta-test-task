import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


const NavLinkStyled = styled(NavLink)`
	font-size: ${props => props.theme.fontSizes.xsmall};
`;

export const NavigateMenu: React.FC = () => {
	return (
		<nav>
			<NavLinkStyled to="/">Перевірити ТТН</NavLinkStyled>
			<NavLinkStyled to="/warehouses">Список відділень</NavLinkStyled>
		</nav>
	);
};

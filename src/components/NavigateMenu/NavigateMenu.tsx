import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigateStyled } from "./NavigateMenu.styled";

const NavLinkStyled = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 200px;
	border: 1px solid red;
	border-radius: 10px;
	font-size: ${props => props.theme.fontSizes.xsmall};
`;

export const NavigateMenu: React.FC = () => {
	return (
		<NavigateStyled>
			<NavLinkStyled to="/">Перевірити ТТН</NavLinkStyled>
			<NavLinkStyled to="/warehouses">Список відділень</NavLinkStyled>
		</NavigateStyled>
	);
};

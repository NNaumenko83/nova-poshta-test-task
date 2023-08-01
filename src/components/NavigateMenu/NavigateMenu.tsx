import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { NavigateStyled } from "./NavigateMenu.styled";

const NavLinkStyled = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 200px;

	color: ${props => props.theme.colors.brightTxt};
	font-size: ${props => props.theme.fontSizes.xsmall};
	&.active {
		color: white;
		border: 1px solid ${props => props.theme.colors.brightTxt};
		background-color: #ff0044;

		border-radius: 10px;
		-moz-box-shadow: 1px 0px 15px 0px rgba(245, 245, 245, 1);
		box-shadow: 1px 0px 15px 0px rgba(245, 245, 245, 1);
	}

	transition: color, text-shadow 300ms linear;
	&:hover,
	&:focus {
		color: #ffd42f;
		text-shadow: 0px 0px 3px #ceb30a;
	}
`;

export const NavigateMenu: React.FC = () => {
	return (
		<NavigateStyled>
			<NavLinkStyled to="/">Перевірити ТТН</NavLinkStyled>
			<NavLinkStyled to="/warehouses">Список відділень</NavLinkStyled>
		</NavigateStyled>
	);
};

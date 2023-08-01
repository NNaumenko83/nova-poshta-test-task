import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderStyled, LogoText } from "./Header.styled";
import sprite from "../../assets/symbol-defs.svg";

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<LogoText>NovaPoshta</LogoText>
					<nav>
						<NavLink to="/">Перевірити ТТН</NavLink>
						<NavLink to="/warehouses">Список відділень</NavLink>
					</nav>
					{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
				</HeaderContainer>
			</Container>
		</HeaderStyled>
	);
};

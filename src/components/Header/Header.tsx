import { Container } from "../Container/Container";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
	return (
		<header style={{ backgroundColor: "red" }}>
			<Container>
				<h1>NovaPoshta</h1>
				<nav>
					<NavLink to="/">Перевірити ТТН</NavLink>
					<NavLink to="/warehouses">Список відділень</NavLink>
				</nav>
				{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
			</Container>
		</header>
	);
};

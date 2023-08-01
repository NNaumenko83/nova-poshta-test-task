import { Container } from "../Container/Container";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
	return (
		<header>
			<Container>
				<h1>NovaPoshta</h1>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/warehouses">About</Link>
				</nav>
				{/* <img src={logo} alt="Nova Poshta Logo" style={{ height: "40px" }} /> */}
			</Container>
		</header>
	);
};

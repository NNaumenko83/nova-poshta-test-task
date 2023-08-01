import { Container } from "../Container/Container";

import { HeaderContainer, HeaderStyled, LogoText, NavigateWrapper } from "./Header.styled";

import ResponsiveDrawer from "../Drawer/Drawer";
import { NavigateMenu } from "../NavigateMenu/NavigateMenu";

export const Header: React.FC = () => {
	return (
		<HeaderStyled>
			<Container>
				<HeaderContainer>
					<LogoText>NovaPoshta</LogoText>
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

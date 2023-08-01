import { ReactNode } from "react";
import { Container } from "../Container/Container";

interface IMainProps {
	children: ReactNode;
}

export const Main: React.FC<IMainProps> = ({ children }) => {
	return (
		<main>
			<Container>{children}</Container>
		</main>
	);
};

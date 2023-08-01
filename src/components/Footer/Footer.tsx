import React from "react";
import { Container } from "../Container/Container";

export const Footer: React.FC = () => {
	return (
		<footer style={{ backgroundColor: "red", color: "white" }}>
			<Container>
				<p>Created by Mykola Naumenko</p>
			</Container>
		</footer>
	);
};

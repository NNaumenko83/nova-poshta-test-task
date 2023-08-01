import React, { useState } from "react";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { Sidebar } from "../SideBar/Sidebar";
import { InfoWrapper, MainContainer, TrackFormWrapper } from "./Main.styled";
import { TrackForm } from "../TrackForm/TrackForm";

import { Container } from "../Container/Container";

export const Main: React.FC = () => {
	const [trackedNumbers, setTrackedNumbers] = useState<string[]>([]);

	const handleTrackingResponse = (response: string) => {
		setTrackedNumbers(prevTrackedNumbers => [...prevTrackedNumbers, response]);
	};

	return (
		<main>
			<Container>
				<MainContainer>
					<TrackFormWrapper>
						<TrackForm />
					</TrackFormWrapper>
					<InfoWrapper>
						<h1>Main Content</h1>
						<p>This is the main content of the website.</p>

						{trackedNumbers.map((number, index) => (
							<TrackInfo key={index} ttnNumber={number} onTrackingResponse={handleTrackingResponse} />
						))}
					</InfoWrapper>
					<Sidebar trackingNumbers={trackedNumbers} />
				</MainContainer>
			</Container>
		</main>
	);
};

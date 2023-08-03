import { Main } from "../../components/Main/Main";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { TrackForm } from "../../components/TrackForm/TrackForm";
import { TrackInfo } from "../../components/TrackInfo/TrackInfo";
import { HomeContainer } from "./Home.styled";
import { useState } from "react";

export const Home = () => {
	const [trackNumber, setTrackNumber] = useState("");

	const changeTrackNumberHandler = (track: string) => {
		setTrackNumber(track);
	};

	return (
		<Main>
			<HomeContainer>
				<TrackForm trackNumber={trackNumber} changeTrackNumberHandler={changeTrackNumberHandler} />
				<TrackInfo trackNumber={trackNumber} />
				<Sidebar changeTrackNumberHandler={changeTrackNumberHandler} />
			</HomeContainer>
		</Main>
	);
};

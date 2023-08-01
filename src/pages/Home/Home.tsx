import { Main } from "../../components/Main/Main";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { TrackForm } from "../../components/TrackForm/TrackForm";
import { TrackInfo } from "../../components/TrackInfo/TrackInfo";
import { HomeContainer } from "./Home.styled";

export const Home = () => {
	return (
		<Main>
			<HomeContainer>
				<TrackForm />
				<TrackInfo />
				<Sidebar />
			</HomeContainer>
		</Main>
	);
};

// Sidebar.tsx
import React from "react";
import { TrackList } from "../TracksList/TrackList";
import { SideBarStyled } from "./Sidebar.styled";

interface ISidebarProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
	return (
		<SideBarStyled>
			<h2>Історія</h2>
			<TrackList {...props} />
		</SideBarStyled>
	);
};

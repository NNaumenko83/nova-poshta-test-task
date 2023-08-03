// Sidebar.tsx
import React from "react";
import { TrackList } from "../TracksList/TrackList";

interface ISidebarProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
	return (
		<aside>
			<h2>Історія</h2>
			<TrackList {...props} />
		</aside>
	);
};

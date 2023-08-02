// Sidebar.tsx
import React from "react";
import { TrackList } from "../TracksList/TrackList";

// interface SidebarProps {
// 	trackingNumbers: string[];
// }

export const Sidebar: React.FC = () => {
	return (
		<aside>
			<h2>Історія</h2>
			<TrackList />
		</aside>
	);
};

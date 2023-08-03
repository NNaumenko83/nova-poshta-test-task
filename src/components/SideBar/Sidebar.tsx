// Sidebar.tsx
import React from "react";
import { TrackList } from "../TracksList/TrackList";
import { BrushButton, SideBarStyled, TitleButtonWrapper } from "./Sidebar.styled";
import { BiBrushAlt } from "react-icons/bi";
import { deleteTracks } from "../../redux/trackSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface ISidebarProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
	const dispatch = useAppDispatch();
	const brushButtonHandler = () => {
		dispatch(deleteTracks());
	};
	return (
		<SideBarStyled>
			<TitleButtonWrapper>
				<h2>Історія</h2>
				<BrushButton type="button" onClick={brushButtonHandler}>
					<BiBrushAlt size={20} />
				</BrushButton>
			</TitleButtonWrapper>

			<TrackList {...props} />
		</SideBarStyled>
	);
};

// Sidebar.tsx
import React from "react";
import { TrackList } from "../TracksList/TrackList";
import { BrushButton, SideBarStyled, TitleButtonWrapper } from "./Sidebar.styled";
import { BiBrushAlt } from "react-icons/bi";
import { styled } from "styled-components";

const BrushIcon = styled(BiBrushAlt)``;

interface ISidebarProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const Sidebar: React.FC<ISidebarProps> = props => {
	return (
		<SideBarStyled>
			<TitleButtonWrapper>
				<h2>Історія</h2>
				<BrushButton type="button">
					<BiBrushAlt size={20} />
				</BrushButton>
			</TitleButtonWrapper>

			<TrackList {...props} />
		</SideBarStyled>
	);
};

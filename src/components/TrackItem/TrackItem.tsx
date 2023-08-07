import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getTrack } from "../../redux/operations";
import { ListItem } from "./TrackItem.styled";

interface ITrackProps {
	number: string;
	changeTrackNumberHandler: (track: string) => void;
}

export const TrackItem: React.FC<ITrackProps> = ({ number, changeTrackNumberHandler }) => {
	const dispatch = useAppDispatch();

	const onTrackItemClick = () => {
		changeTrackNumberHandler(number);
		dispatch(getTrack(number));
	};

	return <ListItem onClick={onTrackItemClick}>{number}</ListItem>;
};

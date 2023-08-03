import React from "react";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getTrack } from "../../redux/operations";

interface ITrackProps {
	number: string;
	changeTrackNumberHandler: (track: string) => void;
}

export const TrackItem: React.FC<ITrackProps> = ({ number, changeTrackNumberHandler }) => {
	const dispatch = useAppDispatch();

	const onTrackItemClick = () => {
		console.log("click number:", number);
		changeTrackNumberHandler(number);
		dispatch(getTrack(number));
	};

	return <div onClick={onTrackItemClick}>{number}</div>;
};

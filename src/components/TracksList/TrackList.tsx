import { useAppSelector } from "../../hooks/reduxHooks";
import { TrackItem } from "../TrackItem/TrackItem";
import { List } from "./TrackList.styled";

interface ITrackListProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const TrackList: React.FC<ITrackListProps> = props => {
	const tracksList = useAppSelector(state => state.tracks.list);

	return (
		<List>
			{tracksList.map(item => (
				<TrackItem key={item.number} number={item.number} {...props} />
			))}
		</List>
	);
};

import { useAppSelector } from "../../hooks/reduxHooks";
import { TrackItem } from "../TrackItem/TrackItem";

interface ITrackListProps {
	changeTrackNumberHandler: (track: string) => void;
}

export const TrackList: React.FC<ITrackListProps> = props => {
	const tracksList = useAppSelector(state => state.tracks.list);

	return (
		<ul>
			{tracksList.map(item => (
				<TrackItem key={item.number} number={item.number} {...props} />
			))}
		</ul>
	);
};

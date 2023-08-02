import { useAppSelector } from "../../hooks/reduxHooks";
import { TrackItem } from "../TrackItem/TrackItem";

export const TrackList = () => {
	const tracksList = useAppSelector(state => state.tracks.list);
	console.log("tracksList:", tracksList);

	return (
		<ul>
			{tracksList.map(item => (
				<TrackItem key={item.number} number={item.number} />
			))}
		</ul>
	);
};

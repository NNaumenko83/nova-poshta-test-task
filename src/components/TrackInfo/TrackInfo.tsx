import { useAppSelector } from "../../hooks/reduxHooks";
import { TrackInfoStyled } from "./TrackInfo.styled";

interface ITrackInfoProps {
	trackNumber: string;
}

export const TrackInfo: React.FC<ITrackInfoProps> = ({ trackNumber }) => {
	const track = useAppSelector(state => state.tracks.list);
	console.log("track:", track);

	const findTrack = track.find(item => item.number === trackNumber);

	return (
		<TrackInfoStyled>
			{findTrack && (
				<div style={{ backgroundColor: "tomato" }}>
					<p>
						<span>Статус доставки:</span>
						<span>{findTrack.status}</span>
					</p>
					{findTrack.warehouseSender && (
						<p>
							<span>Відправлено:</span>
							<span>{findTrack.warehouseRecipient}</span>
						</p>
					)}
					{findTrack.warehouseRecipient && (
						<p>
							<span>Отримано:</span>
							<span>{findTrack.warehouseRecipient}</span>
						</p>
					)}
				</div>
			)}
		</TrackInfoStyled>
	);
};

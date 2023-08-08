import { useAppSelector } from "../../hooks/reduxHooks";
import { InfoWrapper, TrackInfoStyled, InfoLabel } from "./TrackInfo.styled";

interface ITrackInfoProps {
	trackNumber: string;
}

export const TrackInfo: React.FC<ITrackInfoProps> = ({ trackNumber }) => {
	const track = useAppSelector(state => state.tracks.list);

	const findTrack = track.find(item => item.number === trackNumber);

	return (
		<TrackInfoStyled>
			{findTrack && (
				<InfoWrapper>
					<div>
						<InfoLabel>Статус доставки:</InfoLabel>
						<span>{findTrack.status}</span>
					</div>
					{findTrack.warehouseSender && (
						<div>
							<InfoLabel>Адреса відправки:</InfoLabel>
							<span>{findTrack.warehouseSender}</span>
						</div>
					)}
					{findTrack.warehouseRecipient && (
						<div>
							<InfoLabel>Адреса доставки:</InfoLabel>
							<span>{findTrack.warehouseRecipient}</span>
						</div>
					)}
				</InfoWrapper>
			)}
		</TrackInfoStyled>
	);
};

import React from "react";

interface ITrackProps {
	number: string;
}

export const TrackItem: React.FC<ITrackProps> = ({ number }) => {
	return (
		<div
			onClick={() => {
				console.log("click");
			}}
		>
			{number}
		</div>
	);
};

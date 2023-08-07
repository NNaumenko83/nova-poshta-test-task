import { useParams } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { getWarehouseInfo } from "../../services/api/getWarehouseInfo";
import { getErrorMessage } from "../../utils/getErrorMessage";

interface IDimensions {
	Height: number;
	Length: number;
	Width: number;
}

interface IShedule {
	Friday: string;
	Monday: string;
	Saturday: string;
	Sunday: string;
	Thursday: string;
	Tuesday: string;
	Wednesday: string;
}

interface IWarehouseInfo {
	Number: number;
	Description: string;
	ReceivingLimitationsOnDimensions: IDimensions;
	Reception: IShedule;
	Schedule: IShedule;
	SendingLimitationsOnDimensions: { Height: number; Length: number; Width: number };
	PlaceMaxWeightAllowed: string;
}

export const WarehousesDetails = () => {
	const [error, setError] = useState("");
	console.log("error:", error);
	const [isLoading, setIsLoading] = useState(false);
	console.log("isLoading:", isLoading);
	const [warehouseInfo, setWarehouseInfo] = useState<IWarehouseInfo[]>([]);
	const { city, ref } = useParams();
	console.log("ref:", ref);
	console.log("city:", city);

	useEffect(() => {
		console.log("useEffect");
		const fetchWarehouseInfo = async () => {
			setIsLoading(true);
			if (ref) {
				try {
					const warehouseInfo = await getWarehouseInfo(ref);
					console.log("warehouseInfo:", warehouseInfo);
					setWarehouseInfo(warehouseInfo);
				} catch (error) {
					setError(getErrorMessage(error));
				} finally {
					setIsLoading(false);
				}
			}
		};
		fetchWarehouseInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const displayDimensions = (dimensions: IDimensions) => {
		return (
			<ul>
				{Object.entries(dimensions).map(([key, value]) => (
					<li key={key}>
						{key}: {value}
					</li>
				))}
			</ul>
		);
	};

	const displaySchedule = (schedule: IShedule) => {
		console.log(Object.entries(schedule));
		return (
			<ul>
				{Object.entries(schedule).map(([day, time]) => (
					<li key={day}>
						{day}: {time}
					</li>
				))}
			</ul>
		);
	};

	return (
		<Main>
			<h1>Warehouses details</h1>

			{warehouseInfo.length > 0 && (
				<div>
					<h2>Warehouse Information</h2>
					<p>Number: {warehouseInfo[0].Number}</p>
					<p>Description: {warehouseInfo[0].Description}</p>
					<h3>Receiving Limitations On Dimensions:</h3>
					{displayDimensions(warehouseInfo[0].ReceivingLimitationsOnDimensions)}
					<h3>Reception Schedule:</h3>
					{displaySchedule(warehouseInfo[0].Reception)}
					<h3>Schedule:</h3>
					{displaySchedule(warehouseInfo[0].Schedule)}
					<h3>Sending Limitations On Dimensions:</h3>
					{displayDimensions(warehouseInfo[0].SendingLimitationsOnDimensions)}
					<p>Total Max Weight Allowed: {warehouseInfo[0].PlaceMaxWeightAllowed}</p>
				</div>
			)}
		</Main>
	);
};

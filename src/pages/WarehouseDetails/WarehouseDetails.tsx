import { useParams } from "react-router-dom";
import { Main } from "../../components/Main/Main";
import { useEffect, useState } from "react";
import { getWarehouseInfo } from "../../services/api/getWarehouseInfo";
import { getErrorMessage } from "../../utils/getErrorMessage";
import { daysOfWeek } from "../../constans/daysOfWeek";
import { dimensionsUa } from "../../constans/dimemsions";

import {
	ColumnTableOne,
	ColumnTableTwo,
	InfoWrapper,
	SheduleTable,
	TableCell,
	TableHeader,
} from "./WarehousesDetails.styled";

interface IdaysOfWeek {
	Monday: string;
	Tuesday: string;
	Wednesday: string;
	Thursday: string;
	Friday: string;
	Saturday: string;
	Sunday: string;
}
interface IDimensions {
	Height: number;
	Length: number;
	Width: number;
}

type DimensionsUa = {
	Width: string;
	Height: string;
	Length: string;
};

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
	SendingLimitationsOnDimensions: IDimensions;
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
						{dimensionsUa[key as keyof DimensionsUa]}: {value}
					</li>
				))}
			</ul>
		);
	};

	const displayScheduleTime = (schedule: IShedule) => {
		return (
			<>
				<ColumnTableOne>
					{Object.entries(schedule).map(([day]) => (
						<TableCell key={day}>{daysOfWeek[day as keyof IdaysOfWeek]}</TableCell>
					))}
				</ColumnTableOne>
				<ColumnTableTwo>
					{Object.entries(schedule).map(([day, time]) => (
						<TableCell key={day}>{time}</TableCell>
					))}
				</ColumnTableTwo>
			</>
		);
	};

	return (
		<Main>
			{warehouseInfo.length > 0 && (
				<InfoWrapper>
					<div style={{ background: "yellow" }}>
						<p>{warehouseInfo[0].Description}</p>
					</div>

					<div style={{ background: "pink" }}>
						<p>Обмеження за габаритами на відправку (см):</p>
						{displayDimensions(warehouseInfo[0].SendingLimitationsOnDimensions)}
					</div>

					<div style={{ background: "grey" }}>
						<p>Обмеження за габаритами на отримання (см):</p>
						{displayDimensions(warehouseInfo[0].ReceivingLimitationsOnDimensions)}
					</div>

					<div style={{ background: "tomato" }}>
						<p>Обмеження ваги: до {warehouseInfo[0].PlaceMaxWeightAllowed} кг </p>
					</div>

					<SheduleTable>
						<TableHeader>Графік роботи</TableHeader>

						{displayScheduleTime(warehouseInfo[0].Schedule)}
					</SheduleTable>
				</InfoWrapper>
			)}
		</Main>
	);
};

/*
<h3>Графік роботи:</h3>;
{
	displaySchedule(warehouseInfo[0].Reception);
}
{
	
					{displaySchedule(warehouseInfo[0].Schedule)}
}

<h3>Обмеження за габаритами на отримання (см):</h3>;
{
	displayDimensions(warehouseInfo[0].ReceivingLimitationsOnDimensions);
}
<h3>Графік роботи:</h3>;
{
	displaySchedule(warehouseInfo[0].Reception);
}
*/

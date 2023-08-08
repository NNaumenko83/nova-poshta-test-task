import { useParams } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

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
	CommonInfoWrapper,
	InfoTitle,
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
	TotalMaxWeightAllowed: string;
	PlaceMaxWeightAllowed: string;
}

const WarehousesDetails = () => {
	const [error, setError] = useState("");

	const [isLoading, setIsLoading] = useState(false);

	const [warehouseInfo, setWarehouseInfo] = useState<IWarehouseInfo[]>([]);
	const { ref } = useParams();

	useEffect(() => {
		const fetchWarehouseInfo = async () => {
			setIsLoading(true);
			if (ref) {
				try {
					const warehouseInfo = await getWarehouseInfo(ref);

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
			{isLoading && (
				<MutatingDots
					height={100}
					width={100}
					color="#df012e"
					secondaryColor="#df012e"
					radius={12.5}
					ariaLabel="mutating-dots-loading"
					visible={true}
				/>
			)}
			{!isLoading && !error && warehouseInfo.length > 0 && (
				<InfoWrapper>
					<CommonInfoWrapper>
						<div>
							<InfoTitle>{warehouseInfo[0].Description}</InfoTitle>
						</div>

						<div>
							<InfoTitle>Обмеження за габаритами на відправку (см):</InfoTitle>
							{displayDimensions(warehouseInfo[0].SendingLimitationsOnDimensions)}
						</div>

						<div>
							<InfoTitle>Обмеження за габаритами на отримання (см):</InfoTitle>
							{displayDimensions(warehouseInfo[0].ReceivingLimitationsOnDimensions)}
						</div>

						<div>
							<InfoTitle>Обмеження ваги:</InfoTitle>{" "}
							<p>
								<span>до </span>
								{warehouseInfo[0].TotalMaxWeightAllowed !== "0"
									? warehouseInfo[0].TotalMaxWeightAllowed
									: warehouseInfo[0].PlaceMaxWeightAllowed}
								<span> кг</span>
							</p>
						</div>
					</CommonInfoWrapper>

					<SheduleTable>
						<TableHeader>Графік роботи</TableHeader>

						{displayScheduleTime(warehouseInfo[0].Schedule)}
					</SheduleTable>
				</InfoWrapper>
			)}
		</Main>
	);
};

export default WarehousesDetails;

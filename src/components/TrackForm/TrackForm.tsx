import React from "react";
import { Form, FormWrapper } from "./TrackForm.styled";
import { ButtonStyled } from "../Button/Button";
import FocusOutlineInput from "../Input/Input";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { getTrack } from "../../redux/operations";

interface ITrackFormProps {
	trackNumber: string;
	changeTrackNumberHandler: (track: string) => void;
}

export const TrackForm: React.FC<ITrackFormProps> = ({ trackNumber, changeTrackNumberHandler }) => {
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim().replace(/[^\d]/g, "").slice(0, 14);
		changeTrackNumberHandler(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(getTrack(trackNumber));
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleSubmit}>
				<FocusOutlineInput value={trackNumber} onChange={handleChange} placeholder="Введіть номер ТТН" />

				<ButtonStyled type="submit" disabled={trackNumber.length !== 14}>
					Пошук
				</ButtonStyled>
			</Form>
		</FormWrapper>
	);
};

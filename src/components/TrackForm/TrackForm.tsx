import React, { useState } from "react";
import { Form, FormWrapper } from "./TrackForm.styled";
import { ButtonStyled } from "../Button/Button";
import FocusOutlineInput from "../Input/Input";

export const TrackForm: React.FC = () => {
	const [ttnNumber, setTtnNumber] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/[^\d]/g, "").slice(0, 14);
		setTtnNumber(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<FormWrapper>
			<Form onSubmit={handleSubmit}>
				<FocusOutlineInput value={ttnNumber} onChange={handleChange} placeholder="Введіть номер ТТН" />

				<ButtonStyled type="submit">Пошук</ButtonStyled>
			</Form>
		</FormWrapper>
	);
};

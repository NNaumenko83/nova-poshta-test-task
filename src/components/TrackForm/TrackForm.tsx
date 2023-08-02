import React, { useState } from "react";
import { FormWrapper } from "./TrackForm.styled";
import { ButtonStyled } from "../Button/Button";

export const TrackForm: React.FC = () => {
	const [ttnNumber, setTtnNumber] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		// Валідація: зберігаємо тільки цифри
		const value = e.target.value.replace(/[^\d]/g, "");
		setTtnNumber(value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<FormWrapper>
			<form onSubmit={handleSubmit} style={{ padding: "10px" }}>
				<input
					type="text"
					value={ttnNumber}
					onChange={handleChange}
					placeholder="Введіть номер ТТН"
					style={{ marginRight: "10px" }}
				/>
				<ButtonStyled type="submit">Пошук</ButtonStyled>
			</form>
		</FormWrapper>
	);
};

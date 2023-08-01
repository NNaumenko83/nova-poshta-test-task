import React, { useState } from "react";
import { FormWrapper } from "./TrackForm.styled";

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
				<button type="submit" style={{ background: "red", color: "white", border: "none" }}>
					Пошук
				</button>
			</form>
		</FormWrapper>
	);
};

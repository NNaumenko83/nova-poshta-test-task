import { styled } from "styled-components";

export const FormWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	border: 1px solid green;

	@media screen and (min-width: 768px) {
		grid-area: 1 / 1 / 2 / 3;
	}
`;

export const Form = styled.form`
	display: flex;
	gap: 10px;
	justify-content: conter;
	align-items: center;
`;

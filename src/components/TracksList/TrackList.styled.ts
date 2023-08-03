import { styled } from "styled-components";

export const List = styled.ul`
	display: flex;
	gap: 5px;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	max-height: calc(100vh - 300px);
	width: 100%;
	overflow: auto;
`;

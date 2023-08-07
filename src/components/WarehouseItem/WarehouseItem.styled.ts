import { styled } from "styled-components";

export const Item = styled.li`
	border: 1px solid orange;
	border-radius: 10px;
	padding: 5px;
	background-color: ${props => props.theme.colors.fourthBacgroundCOlor};
`;

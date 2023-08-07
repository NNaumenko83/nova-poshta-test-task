import { styled } from "styled-components";

export const Item = styled.div`
	border: 1px solid ${props => props.theme.colors.borderComponents};
	border-radius: 10px;
	padding: 5px;
	background-color: ${props => props.theme.colors.fourthBacgroundCOlor};
`;

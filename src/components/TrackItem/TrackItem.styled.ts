import { styled } from "styled-components";

export const ListItem = styled.li`
	width: 100%;
	padding: 5px;
	text-align: center;

	border: 1px solid ${props => props.theme.colors.borderNonActive};
	border-radius: 8px;
	cursor: pointer;

	font-size: ${props => props.theme.fontSizes.xsmall};
	transition: transform 150ms linear;

	&:hover {
		border-color: ${props => props.theme.colors.secondBackGround};
		transform: scale(1.05);
	}
`;

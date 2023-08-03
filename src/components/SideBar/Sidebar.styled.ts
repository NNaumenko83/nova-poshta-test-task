import { styled } from "styled-components";

export const SideBarStyled = styled.aside`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;

	padding: 10px;

	border: 3px solid red;
	border-radius: 20px;

	@media screen and (min-width: 768px) {
		grid-area: 2 / 2/ 3 /3;
	}
`;

export const TitleButtonWrapper = styled.div`
	position: relative;
	display: flex;
	gap: 10px;
	justify-content: center;

	width: 100%;
`;

export const BrushButton = styled.button`
	position: absolute;
	right: 15px;

	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: ${props => props.theme.colors.mainBackGround};
	transition: color 200ms linear;

	&:hover,
	&:focus {
		color: ${props => props.theme.colors.secondBackGround};
	}
`;

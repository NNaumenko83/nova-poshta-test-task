import { styled } from "styled-components";

export const List = styled.ul`
	display: flex;
	gap: 5px;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	max-height: calc(100vh - 350px);
	width: 100%;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 8px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.secondBackGround};
		border-radius: 8px;
	}

	&::-webkit-scrollbar-track {
		background-color: ${props => props.theme.colors.footerLinkSecondColor};
		border-radius: 8px;
	}
`;

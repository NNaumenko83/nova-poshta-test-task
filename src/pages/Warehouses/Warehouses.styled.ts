import { styled } from "styled-components";

export const CitiesWrapper = styled.div`
	height: calc(100vh - 260px);

	overflow: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	padding: 5px 10px;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;
`;

export const CitiesListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	height: 100%;
	width: 100%;
	padding: 0 10px;

	font-size: ${props => props.theme.fontSizes.xssmall};
	overflow: auto;
	@media screen and (min-width: 768px) {
		font-size: ${props => props.theme.fontSizes.small};
	}
`;

export const InputWrapper = styled.div`
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	border: 2px solid ${props => props.theme.colors.borderComponents};
	border-radius: 20px;

	@media screen and (min-width: 768px) {
	}
`;

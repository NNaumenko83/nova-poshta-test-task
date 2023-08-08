import { styled } from "styled-components";
import notFoundImage from "../../assets/10-error-404-page-examples-for-UX-design_min.jpg";

export const NotFoundContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px;
	color: ${props => props.theme.colors.footerLinkSecondColor};

	min-height: 100%;
	background-color: ${props => props.theme.colors.fourthBacgroundCOlor};
	background-image: url(${notFoundImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	font-size: ${props => props.theme.fontSizes.medium};
	font-weight: ${props => props.theme.fontWeights.bold};
`;

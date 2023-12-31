import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		mainBackGround: "#ffffff",
		secondBackGround: "#df012e",
		thirdBacgroundCOlor: "#df6513",
		fourthBacgroundCOlor: "#fffbaf",
		darkText: "#000000",
		brightTxt: "#ffffff",
		borderNonActive: "#e2e2e2",
		borderComponents: "#df012e",
		footerLinkSecondColor: "#fad524",
	},

	fontSizes: {
		xssmall: "0.6rem",
		xsmall: "0.8rem",
		small: "1.0rem",
		medium: "1.2rem",
		large: "3rem",
	},
	fontWeights: {
		light: 300,
		normal: 500,
		bold: 700,
	},
};

interface IPropsTheme {
	children: ReactNode;
}

export default function Theme({ children }: IPropsTheme) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
